import * as constants from '../constants.js'

const SELECTORS = {
    emailField: '[ng-model="$ctrl.formData.email"]',
    passwordField: '[ng-model="$ctrl.formData.password"]',
    signInButton: '.btn-primary'        
}

class LoginPage{
    fillCredentials(field, value) {
        cy.get(`${SELECTORS[`${field}`]}`)
          .type(value)
    }

    clickSignInButton() {
        cy.get(SELECTORS.signInButton)
          .click()
    }

    signIn(creds = {email: constants.USER.email, password: constants.USER.password}) {
        this.fillCredentials('emailField', creds.email)
        this.fillCredentials('passwordField', creds.password)
        this.clickSignInButton()
    }
}

export default LoginPage;
