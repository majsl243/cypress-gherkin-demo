import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as constants from '../constants.js'
import Header from '../pages/header.js'
import LoginPage from '../pages/login_page.js'
import PublishArticle from '../pages/publish_article_page.js'
import ArticleView from '../pages/article_view_page.js'

const header = new Header()
const loginPage = new LoginPage()
const publishArticlePage = new PublishArticle()
const acticlePage = new ArticleView()

when('user is logged in', () => {
    cy.visit('/')
    header.goToSignIn()
    loginPage.signIn()
});

// then("username appears in the nav bar", () => {
//   expect(stepCounter).to.equal(3);
// });

when('user publishes article', () => {
    header.goToNewArticle()
    publishArticlePage.publishArticle()
});

// and("it is sunday", () => {
//   step2Counter += 2;
// });

then('user will be redirected to article view', () => {
    acticlePage.verifyArticleTitle(constants.ARTICLE.title)
});

// but("only when not tired", () => {
//   expect(step2Counter).to.equal(4);
// });