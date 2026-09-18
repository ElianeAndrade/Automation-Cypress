import users from '../fixtures/users.json'
import LoginPage from '../pages/loginPage'


Cypress.Commands.add('login', () => {
  LoginPage.login(users.usuario_valido.email, users.usuario_valido.senha)
})
