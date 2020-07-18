import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import * as constants from '../constants.js'
import Header from '../pages/header.js'
import PublishArticle from '../pages/publish_article_page.js'
import ArticleView from '../pages/article_view_page.js'
import { DATA_VALIDATION_ERRORS } from '../constants.js'

const header = new Header()
const publishArticlePage = new PublishArticle()
const articlePage = new ArticleView()

let tags

When('user opened New Article page', () => {
  header.goToNewArticle()
})

// Match article name or nothing
When(/user publishes article\s*"*([a-zA-Z0-9\s]*)"*/, (title) => {
  if (title) {
    let article = constants.ARTICLE

    article.title = title

    if (tags) {
      article.tags = tags
    }

    publishArticlePage.publishArticle(article)
  } else {
    publishArticlePage.publishArticle()
  }
})

Then('user will be redirected to article view', () => {
  articlePage.verifyArticleField('articleTitle', constants.ARTICLE.title)
})

When('didn\'t fill any field', () => {
  publishArticlePage.clickPublishButton()
})

Then('data validation errors appears', () => {
  for (let error in DATA_VALIDATION_ERRORS) {
    publishArticlePage.verifyDataValidationError(DATA_VALIDATION_ERRORS[error])
  }
})

When('published article with links in the body', () => {
  publishArticlePage.publishArticle(constants.ARTICLE_WITH_LINKS)
})

Then('links should be working', () => {
  let linkInArticle = constants.ARTICLE_WITH_LINKS.body.split('https:')[1]

  articlePage.verifyLinkInBody(`https:${linkInArticle}`)
})

When('custom tags are', (rawTags) => {
  tags = []
  rawTags.hashes().forEach((tag) => {
    tags.push(tag.tagName)
  })
})
