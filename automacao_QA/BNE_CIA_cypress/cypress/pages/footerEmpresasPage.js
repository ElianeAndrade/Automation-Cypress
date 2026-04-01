import users from '../fixtures/users.json';
import LoginPage from './loginPage';

class FooterEmpresas {

  admissaoDigital() {
    LoginPage.visitar();
    cy.get('a[title="Admissão digital"]', { timeout: 10000 }).click();
    cy.get('.title', { timeout: 10000 }).should('be.visible');
  }

  anunciarVagas() {
    LoginPage.visitar();
    /*cy.xpath('(//a[@title="Anunciar Vaga"])[2]')
      .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.include('https://anunciarvaga.com.br');
        cy.request(href).its('status').should('eq', 200);
      });*/
    cy.xpath('(//a[@title="Anunciar Vaga"])[2]').click();
    LoginPage.loginValido();
    LoginPage.validaSeLogouComSucesso();
  }
  

  cadastrarEmpresa() {
      LoginPage.visitar();
      cy.get('a[title="Cadastrar Empresa"]', { timeout: 10000 }).click();
      cy.get('.card', { timeout: 10000 }).should('be.visible');
    }

  gestaoProcessoSeletivo() {
    LoginPage.visitar();
    cy.get('a[title="Gestão do processo seletivo"]', { timeout: 10000 }).click();
    cy.get('div[class="container"] h1', { timeout: 10000 }).should('be.visible');
  }

  minhasVagas() {
    LoginPage.visitar();
    cy.get('a[title="Minhas vagas"]', { timeout: 10000 }).click();
    LoginPage.loginValido();
    cy.wait(5000);
    cy.contains('Minhas vagas', { timeout: 10000 }).should('be.visible');
  }

  pesquisarCurriculos() {
    LoginPage.visitar();
    cy.get('a[title="Pesquisar currículos"]', { timeout: 10000 }).click();
    LoginPage.loginValido();
    cy.wait(5000);
    cy.contains('Encontre o candidato certo para sua vaga!', { timeout: 10000 }).should('be.visible');
  }

  planos() {
    LoginPage.visitar();
    cy.get('a[title="Planos"]', { timeout: 10000 }).click();
    LoginPage.loginValido();
    cy.wait(5000);
    LoginPage.validaSeLogouComSucesso();
  }

  salaSelecionadora() {   
    LoginPage.visitar();
    cy.get('a[title="Sala da Selecionadora"]', { timeout: 10000 }).click();
    LoginPage.loginValido();
    cy.wait(5000);
    LoginPage.validaSeLogouComSucesso();
  }

  sejaParceiro() {
    LoginPage.visitar();
    cy.get('a[title="Seja Parceiro"]', { timeout: 10000 }).click();
    cy.get('a[title="Seja parceiro do BNE"]', { timeout: 10000 }).should('be.visible');
  } 

  siteTrabalheConosco() {
    LoginPage.visitar();
    cy.get('a[title="Site trabalhe conosco"]', { timeout: 10000 }).click();
    cy.get('div[class="container"] h1', { timeout: 10000 }).should('be.visible');
  }

}




export default new FooterEmpresas()
