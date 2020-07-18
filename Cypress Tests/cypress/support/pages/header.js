import * as constants from '../constants.js'
import * as urls from '../urls.js'

const SELECTORS = {
  nav_item: '.nav-item',
}

const NAV_BAR = {
  home: 'Home',
  signIn: 'Sign in',
  newArticle: 'New Article',
}

class Header {

  goToHomePage (byUrl = false) {
    if (byUrl) {
      cy.visit('/')
    } else {
      cy.contains(SELECTORS.nav_item, NAV_BAR.home)
              .click()
    }
  }

  goToSignIn (byUrl = false) {
    if (byUrl) {
      cy.visit(`/${urls.LOGIN_URL}`)
    } else {
      cy.contains(SELECTORS.nav_item, NAV_BAR.signIn)
              .click()
    }
  }

  goToProfile (byUrl = false) {
    if (byUrl) {
      cy.visit(`/@${constants.USER.username}`)
    } else {
      cy.contains(SELECTORS.nav_item, `${constants.USER.username}`)
              .click()
    }
  }

  goToNewArticle (byUrl = false) {
    if (byUrl) {
      cy.visit(`/${urls.PUBLISH_ARTICLE_URL}`)
    } else {
      cy.contains(SELECTORS.nav_item, NAV_BAR.newArticle)
              .click()
    }
  }
}

export default Header
