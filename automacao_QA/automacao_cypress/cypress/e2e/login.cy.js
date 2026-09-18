import LoginPage from '../pages/loginPage'
import users from '../fixtures/users.json'

describe('Fluxo de Login Nome_Instituição', () => {
  it('Deve fazer login com sucesso', () => {
    LoginPage.clicarEntrarEmpresa();
    LoginPage.loginValido();
    LoginPage.validaSeLogouComSucesso();
  })

  it('Deve bloquear login com email incorreto', () => {
    LoginPage.loginInvalido(users.usuario_invalido.email, users.usuario_valido.senha)
  })

  it('Deve bloquear login com senha incorreta', () => {
   LoginPage.loginInvalido(users.usuario_valido.email, users.usuario_invalido.senha)
  })

  it('Fluxo Esqueci Senha', () => {
    LoginPage.esqueciSenha(users.usuario_valido.email, users.usuario_valido.senha)
  })
})
