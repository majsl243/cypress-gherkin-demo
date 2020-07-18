import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import * as constants from '../constants.js'
import ArticleView from '../pages/article_view_page.js'
import UserProfile from '../pages/user_profile_page.js'

const articlePage = new ArticleView()
const userProfilePage = new UserProfile()


When('opened the published article', () => {
  userProfilePage.expandArticle(constants.ARTICLE.title)
})

Then('author name should be same as username', () => {
  articlePage.verifyFieldValue('usernameField', constants.USER.username)
})

Then('publishing date should be as date of publishing', () => {
  let publishDate = articlePage.formatDate(new Date())

  articlePage.verifyFieldValue('dateField', publishDate)
})
