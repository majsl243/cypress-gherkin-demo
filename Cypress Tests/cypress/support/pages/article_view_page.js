import * as constants from '../constants.js'

const SELECTORS = {
    articleTitle: '[ng-bind="::$ctrl.article.title"]',
    shortDesc: '[ng-model="$ctrl.article.body"]',
    body: '[ng-model="$ctrl.article.body"]',
    tags: '[ng-model="$ctrl.tagField"]',
    publishButton: '.btn-primary'
}

class ArticleView{
    verifyArticleTitle(title) {
        cy.get(`${SELECTORS.articleTitle}`)
          .should('contain', title)
    }
}

export default ArticleView;
