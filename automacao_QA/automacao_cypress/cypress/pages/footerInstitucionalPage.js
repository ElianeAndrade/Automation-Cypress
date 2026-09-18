import users from '../fixtures/users.json';
import LoginPage from './loginPage';

class FooterInstitucional {

  /*sobreNome_Instituição() {
    LoginPage.visitar();
    cy.get('a[title="Sobre o Nome_Instituição"]', { timeout: 10000 }).click();
    //cy.get('.title', { timeout: 10000 }).should('be.visible'); -> BUG
  }*/

  agradecimentos() {
    LoginPage.visitar();
    cy.get('a[title="Agradecimentos"]', { timeout: 10000 }).click();
    cy.get('#cphConteudo_upPainelAgradecimentos', { timeout: 10000 }).should('be.visible');
  }

  blogNome_Instituição() {
    LoginPage.visitar();
    cy.xpath('(//a[@title="Blog do Nome_Instituição"])[3]')
      .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.include('https://blog.Nome_Instituição.com.br');
        cy.request(href).its('status').should('eq', 200);
      });
  }

  faleComPresidente() {
    LoginPage.visitar();
    cy.get('a[title="Fale com o Presidente"]', { timeout: 10000 }).click();
    cy.get('.painel_padrao', { timeout: 10000 }).should('be.visible');
  }

  ondeEstamos() {
    LoginPage.visitar();
    cy.get('a[title="Onde Estamos"]', { timeout: 10000 }).click();
    cy.get('.headPresencaNacional', { timeout: 10000 }).should('be.visible');
  }

  LGPD() {
    LoginPage.visitar();
    cy.get('a[title="LGPD"]', { timeout: 10000 }).click();
    cy.get('div[class="privacy__titles w-100"] h1', { timeout: 10000 }).should('be.visible');
  }

  trabalheConosco() {
    LoginPage.visitar();
    cy.get('a[title="Trabalhe conosco"]', { timeout: 10000 }).click();
    cy.get('.container', { timeout: 10000 }).should('be.visible');

  }

  lugarh() {
    LoginPage.visitar();
    cy.get('a[title="Lugarh"]')
      .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.include('https://lugarh.com.br');
        cy.request(href).its('status').should('eq', 200);
      });
  }

  UEMP() {
    LoginPage.visitar();
    cy.get('a[title="UEMP"]')
      .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.include('https://cursosgratis.uemp.com.br');
        cy.request(href).its('status').should('eq', 200);
      });
  }

  trabalhaBrasil() {
    LoginPage.visitar();
    cy.get('a[title="Trabalha Brasil"]')
      .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.include('https://www.trabalhabrasil.com.br');
        cy.request(href).its('status').should('eq', 200);
      });
  }

  redtrabaje() {
    LoginPage.visitar();
    cy.get('a[title="Redtrabaje"]')
      .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.include('https://redtrabaje.com');
        cy.request(href).its('status').should('eq', 200);
      });

  }
}




export default new FooterInstitucional()
