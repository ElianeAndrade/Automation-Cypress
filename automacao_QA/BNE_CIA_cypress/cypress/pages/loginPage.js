import users from '../fixtures/users.json';
class LoginPage {

  elements = {
    email: () => cy.get('input[id="Email"]'),
    senha: () => cy.get('input[name="Password"]'),
    btnEntrar: () => cy.contains('button[name="button"]')
  }

  visitar() {
    const ambiente = Cypress.env('AMBIENTE')?.toLowerCase() || 'prod';
    const url = ambiente === 'stg'
      ? Cypress.env('STG_URL')
      : Cypress.env('PROD_URL');

    cy.visit(url, {
      onBeforeLoad(win) {
        // limpa antes da aplicação carregar
        win.localStorage.clear();
        win.sessionStorage.clear();
      }
    });

    // limpa cookies após carregar
    cy.clearAllCookies();
  }

  preencherLogin(email, senha) {
    this.elements.email().type(email)
    this.elements.senha().type(senha)
  }

  clicarEntrar() {
    this.elements.btnEntrar().click()
  }


  clicarEntrarEmpresa() {
    this.visitar();
    cy.contains('Entrar').click();
    cy.contains('Empresa', { timeout: 10000 }).click();
  }

  loginValido() {
    // Aguarda a navegação para o domínio de login
    const ambiente = Cypress.env('AMBIENTE') || 'prod';
    const originUrl = ambiente === 'stg'
      ? 'https://staging-id.bne.com.br'
      : 'https://id.bne.com.br';

    const { email, senha } = users.usuario_valido;

    cy.url({ timeout: 10000 }).should('include', originUrl.replace('https://', ''));

    cy.origin(originUrl, { args: { email, senha } }, ({ email, senha }) => {
      cy.get('input[name="Email"]').should('be.visible').type(email);
      cy.contains('Entrar').click();
      cy.get('input[name="Password"]').should('be.visible').type(senha);
      cy.contains('Entrar').click();
      cy.wait(3000);
    });
    // Ignora erros dentro do origin
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes("limit' has already been declared") || err.message.includes("elemAdsPainel")) {
        return false;
      }
    });
  }

  validaSeLogouComSucesso() {
    cy.get('.options__block', { timeout: 10000 }).should('be.visible');
  }

  loginInvalido(email, senha) {
    this.clicarEntrarEmpresa();
    // Aguarda a navegação para o domínio de login
    const ambiente = Cypress.env('AMBIENTE') || 'prod';
    const originUrl = ambiente === 'stg'
      ? 'https://staging-id.bne.com.br'
      : 'https://id.bne.com.br';


    cy.url({ timeout: 10000 }).should('include', originUrl.replace('https://', ''));

    cy.origin(originUrl, { args: { email, senha } }, ({ email, senha }) => {
      cy.get('input[name="Email"]').should('be.visible').type(email);
      cy.contains('Entrar').click();
      cy.wait(2000);
      cy.get('body').then($body => {
        // Verifica se o erro de e-mail apareceu
        if ($body.find('.text-danger.field-validation-error:visible').length > 0) {
          cy.get('.text-danger.field-validation-error')
            .should('be.visible')
            .and('contain.text', 'Usuário não cadastrado');
        } else {
          // Caso não tenha erro, continua com o fluxo de senha
          cy.get('input[name="Password"]', { timeout: 10000 })
            .should('be.visible')
            .type(senha);

          cy.contains('Entrar').click();

          //Valida se o erro de senha aparece
          cy.get('.text-danger.field-validation-error', { timeout: 10000 })
            .should('be.visible')
            .and('contain.text', 'Senha incorreta');
        }
      });
    });
  }

  esqueciSenha(email, senha) {
    this.clicarEntrarEmpresa();
    const ambiente = Cypress.env('AMBIENTE') || 'prod';
    const originUrl = ambiente === 'stg'
      ? 'https://staging-id.bne.com.br'
      : 'https://id.bne.com.br';
    cy.origin(originUrl, { args: { email, senha } }, ({ email, senha }) => {
      cy.get('input[name="Email"]').should('be.visible').type(email);
      cy.contains('Entrar').click();
      //clicando no botão esqueci senha
      cy.get('[onclick*="ForgotPassword"]').should('be.visible').click();
      //validando se a mensagem de recuperação de senha apareceu
      cy.get('.toast__title', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Sucesso');
    });
  }
}





export default new LoginPage()
