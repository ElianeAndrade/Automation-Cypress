import LoginPage from './loginPage';

class MeusCurriculos {
    ClicaModuloMeusCurriculos() {
        LoginPage.visitar();
        LoginPage.clicarEntrarEmpresa();
        LoginPage.loginValido();

        // Clica em Meus Currículos
        cy.xpath('(//div[@class="options__card"])[4]').click();

        // 1️⃣ Espera até algum dos estados existir (SEM comandos Cypress dentro)
        cy.get('body', { timeout: 10000 }).should($body => {
            const temBusca = $body.find('.first__search.flex.flex-col').length > 0;
            const temResultado = $body.find('.new-result-display.ng-star-inserted').length > 0;

            expect(temBusca || temResultado).to.be.true;
        });

        // 2️⃣ Decide o fluxo (AGORA pode usar cy.*)
        cy.get('body').then($body => {
            if ($body.find('.first__search.flex.flex-col').length > 0) {
                cy.get('#main__search--input')
                  .clear()
                  .type('Analista de Testes');

                cy.get('#header-btn-search').click();
            }
        });

        // 3️⃣ Valida o estado final (sempre termina aqui)
        cy.get('.new-result-display.ng-star-inserted', { timeout: 10000 })
          .should('be.visible');
    }
}


export default new MeusCurriculos();