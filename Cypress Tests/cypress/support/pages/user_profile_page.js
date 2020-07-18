import * as constants from '../constants.js'

export const PROFILE_NAV_BAR = {
  myArticles: 'My Articles',
  favoritedArticles: 'Favorited Articles',
}

const SELECTORS = {
  provileNavBar: '.outline-active',
  navLink: '.nav-link',
  articlePreview: '.article-preview',
  articleTitle: '[ng-bind="$ctrl.article.title"]',
}

class UserProfile {
  goToSection (section) {
    cy.get(SELECTORS.provileNavBar).within(() => {
      cy.contains(SELECTORS.navLink, section)
            .click()
    })
  }

  expandArticle (articleTitle) {
    cy.contains(SELECTORS.articlePreview, articleTitle)
          .click()
  }

  verifyArticleDoesNotExisit (title) {
    cy.get(`${SELECTORS.articlePreview} ${SELECTORS.articleTitle}`)
          .contains(title)
          .should('not.exist')
  }
}

export default UserProfile

