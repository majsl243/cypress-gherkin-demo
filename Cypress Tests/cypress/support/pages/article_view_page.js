import * as constants from '../constants.js'

const SELECTORS = {
    articleTitle: '[ng-bind="::$ctrl.article.title"]',
    body: '[ng-bind-html="::$ctrl.article.body"]',
    articleBanner: '.banner',
    articleMeta: '.article-meta',
    editButton: '[ui-sref="app.editor({ slug: $ctrl.article.slug })"]',
    deleteButton: '[ng-class="{disabled: $ctrl.isDeleting}"]',
}

class ArticleView{
    clickActionButton(button, fromArticleHeader = true) {
        let butonParentDiv = (fromArticleHeader) ? SELECTORS.articleBanner : SELECTORS.articleMeta

        cy.get(butonParentDiv).within(() => {
            cy.get(SELECTORS[button])
              .click()
        })
    }

    verifyArticleField(field, value) {
        cy.get(SELECTORS[field])
          .should('contain', value)
    }

    verifyLinkInBody(link) {
        cy.get(SELECTORS.body).within(() => {
            cy.get('a')
              .should('have.attr', 'href')
              .and('include', link)
        })
    }
}

export default ArticleView;
