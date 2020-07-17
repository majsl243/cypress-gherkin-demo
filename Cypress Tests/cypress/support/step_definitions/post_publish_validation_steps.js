import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as constants from '../constants.js'
import Header from '../pages/header.js'
import ArticleView from '../pages/article_view_page.js'
import UserProfile from '../pages/user_profile_page.js'

const header = new Header()
const articlePage = new ArticleView()
const userProfilePage = new UserProfile()


when('opened the published article', () => {
    userProfilePage.expandArticle(constants.ARTICLE.title)
})

then('author name should be same as username', () => {
    articlePage.verifyFieldValue('usernameField', constants.USER.username)
})

then('publishing date should be as date of publishing', () => {
    let publishDate = articlePage.formatDate(new Date())
    articlePage.verifyFieldValue('dateField', publishDate)
})