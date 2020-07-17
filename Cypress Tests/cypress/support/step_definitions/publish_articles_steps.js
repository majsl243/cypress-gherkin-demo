import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as constants from '../constants.js'
import Header from '../pages/header.js'
import PublishArticle from '../pages/publish_article_page.js'
import ArticleView from '../pages/article_view_page.js'
import { DATA_VALIDATION_ERRORS } from '../constants.js';

const header = new Header()
const publishArticlePage = new PublishArticle()
const acticlePage = new ArticleView()

when('user opened New Article page', () => {
    header.goToNewArticle()
})

when('user publishes article', () => {
    publishArticlePage.publishArticle()
})

then('user will be redirected to article view', () => {
    acticlePage.verifyArticleField('articleTitle' , constants.ARTICLE.title)
})

when('published article with no data', () => {
    publishArticlePage.clickPublishButton()
})

then('data validation errors appears', () => {
    for(let error in DATA_VALIDATION_ERRORS) {
        publishArticlePage.verifyDataValidationError(DATA_VALIDATION_ERRORS[error])
    }
})