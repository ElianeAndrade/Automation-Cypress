import LoginPage from "./loginPage"
import users from '../fixtures/users.json'


class TelaATSPage {

  clicarAnunciarVaga() {
    LoginPage.visitar();
    cy.contains('Para empresas', { timeout: 10000 }).click();
    cy.xpath('(//a[@title="Anunciar Vaga"])[1]').click();
    cy.wait(5000);
    LoginPage.loginValido();
    cy.wait(5000);

    cy.get('body').then(($body) => {
      if ($body.find('.filter-tab.active.active--bne').length > 0) {
        cy.log('Já está logado na tela ATS nas vagas criadas.');
      } else {
        cy.contains('Detalhes do cargo', { timeout: 10000 }).should('be.visible');
        cy.log('Está na tela ATS para criar vaga.');
      }
    });
  }
}


export default new TelaATSPage()
