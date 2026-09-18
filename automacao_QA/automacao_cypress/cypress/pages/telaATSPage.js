import LoginPage from "./loginPage"
import users from '../fixtures/users.json'


class TelaATSPage {

  clicarAnunciarVaga() {
    LoginPage.visitar();
    cy.contains('Para empresas', { timeout: 10000 }).click();
    cy.xpath('(//a[@title="Anunciar Vaga"])[2]').click();
    cy.wait(5000);
    LoginPage.loginValido();
    cy.wait(5000);

    //valida se a página do ATS abriu 
    cy.xpath('//div[@class="options__card is-service"][1]').click();
    //valida se abriu a aba ativas
    cy.get('.filter-tab.active.active--Nome_Instituição', { timeout: 10000 }).should('be.visible');
    //valida se toda a pagina esta ok
    cy.get('.page__content', { timeout: 10000 }).should('be.visible');
    //valida se possui pelo menos uma vaga publicada
    cy.xpath('(//div[@class="status-button true"])[1]', { timeout: 10000 }).should('be.visible');
    cy.request('https://www.Nome_Instituição.com.br/ats/jobs').its('status').should('eq', 200);
  }
}


export default new TelaATSPage()
