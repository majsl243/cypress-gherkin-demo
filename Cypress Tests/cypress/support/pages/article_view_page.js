import * as constants from '../constants.js'

const SELECTORS = {
  articleTitle: '[ng-bind="::$ctrl.article.title"]',
  body: '[ng-bind-html="::$ctrl.article.body"]',
  articleBanner: '.banner',
  articleMeta: '.article-meta',
  editButton: '[ui-sref="app.editor({ slug: $ctrl.article.slug })"]',
  deleteButton: '[ng-class="{disabled: $ctrl.isDeleting}"]',
  usernameField: '[ng-bind="$ctrl.article.author.username"]',
  dateField: '.date',
}

class ArticleView {
  clickActionButton (button, fromArticleHeader = true) {
    let butonParentDiv = (fromArticleHeader) ? SELECTORS.articleBanner : SELECTORS.articleMeta

    cy.get(butonParentDiv).within(() => {
      cy.get(SELECTORS[button])
              .click()
    })
  }

  verifyArticleField (field, value) {
    cy.get(SELECTORS[field])
          .should('contain', value)
  }

  verifyLinkInBody (link) {
    cy.get(SELECTORS.body).within(() => {
      cy.get('a')
              .should('have.attr', 'href')
              .and('include', link)
    })
  }

  verifyFieldValue (field, value, fromArticleHeader = true) {
    let butonParentDiv = (fromArticleHeader) ? SELECTORS.articleBanner : SELECTORS.articleMeta

    cy.get(butonParentDiv).within(() => {
      cy.get(SELECTORS[field])
              .should('contain', value)
    })
  }

  formatDate (rawDate) {
    let formattedDate = `${this.getMonthName(rawDate.getMonth())} ${rawDate.getDate()}, ${rawDate.getFullYear()}`

    return formattedDate
  }

  getMonthName (monthNumber) {
    switch (monthNumber) {
      case 0: return 'January'
      case 1: return 'February'
      case 2: return 'March'
      case 3: return 'April'
      case 4: return 'May'
      case 5: return 'June'
      case 6: return 'July'
      case 7: return 'August'
      case 8: return 'September'
      case 9: return 'October'
      case 10: return 'November'
      case 11: return 'December'
    }
  }
}

export default ArticleView
