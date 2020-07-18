import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as constants from '../constants.js'
import Header from '../pages/header.js'
import PublishArticle from '../pages/publish_article_page.js'
import ArticleView from '../pages/article_view_page.js'
import { DATA_VALIDATION_ERRORS } from '../constants.js';

const header = new Header()
const publishArticlePage = new PublishArticle()
const articlePage = new ArticleView()

when('user opened New Article page', () => {
    header.goToNewArticle()
})

// Match article name or nothing
when(/user publishes article\s*"*([a-zA-Z0-9\s]*)"*/, (title) => {
    if(title) {
        let article = constants.ARTICLE
        article.title = title
        publishArticlePage.publishArticle(article)
    } else {
        publishArticlePage.publishArticle()
    }
})

then('user will be redirected to article view', () => {
    articlePage.verifyArticleField('articleTitle' , constants.ARTICLE.title)
})

when('didn\'t fill any field', () => {
    publishArticlePage.clickPublishButton()
})

then('data validation errors appears', () => {
    for(let error in DATA_VALIDATION_ERRORS) {
        publishArticlePage.verifyDataValidationError(DATA_VALIDATION_ERRORS[error])
    }
})

when('published article with links in the body', () => {
    publishArticlePage.publishArticle(constants.ARTICLE_WITH_LINKS)
})

then('links should be working', () => {
    let linkInArticle =  constants.ARTICLE_WITH_LINKS.body.split('https:')[1]
    articlePage.verifyLinkInBody(`https:${linkInArticle}`)
})
