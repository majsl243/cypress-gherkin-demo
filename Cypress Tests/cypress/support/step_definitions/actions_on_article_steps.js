import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import {PROFILE_NAV_BAR} from '../pages/user_profile_page.js'
import Header from '../pages/header.js'
import PublishArticle from '../pages/publish_article_page.js'
import ArticleView from '../pages/article_view_page.js'
import UserProfile from '../pages/user_profile_page.js'

const header = new Header()
const publishArticlePage = new PublishArticle()
const articlePage = new ArticleView()
const userProfilePage = new UserProfile()

let modifiedArticle = {        
    title: 'New Title',
    shortDescription: 'Modified description',
    body: 'This is a shorter body. You should see this if you edited your article',
    tags: ['latin', 'lorem', 'ipsum']
}

when('user wants to edit article', () => {
    articlePage.clickActionButton('editButton')
})

when('publishes changes on article details', () => {
    publishArticlePage.publishArticle(modifiedArticle)
})

then('article details should be updated', () => {
    articlePage.verifyArticleField('articleTitle' , modifiedArticle.title)
    articlePage.verifyArticleField('body' , modifiedArticle.body)
})

when('went to My Articles section', () => {
    header.goToProfile()
    cy.wait(2000)
    userProfilePage.goToSection(PROFILE_NAV_BAR.myArticles)
})

when('opened an article', () => {
    userProfilePage.expandArticle(modifiedArticle.title)
})

when('user click delete button', () => {
    articlePage.clickActionButton('deleteButton')
    cy.wait(2000)
})

then('article should not be found in My Articles section', () => {
    header.goToProfile()
    cy.wait(2000)
    userProfilePage.goToSection(PROFILE_NAV_BAR.myArticles)
    userProfilePage.verifyArticleDoesNotExisit(modifiedArticle.title)
})
