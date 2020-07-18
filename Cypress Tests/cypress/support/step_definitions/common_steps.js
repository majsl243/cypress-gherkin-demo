import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Header from '../pages/header.js'
import LoginPage from '../pages/login_page.js'

const header = new Header()
const loginPage = new LoginPage()

When('user is logged in', () => {
  cy.visit('/')
  header.goToSignIn()
  loginPage.signIn()
  cy.wait(2000)
})

