import loginPage from "./loginPage";

class ConfiguracoesPage {

    AcessarModuloConfiguracoes() {
        loginPage.visitar();
        loginPage.clicarEntrarEmpresa();
        loginPage.loginValido();

        cy.xpath('(//div[@class="options__card"])[5]').click();
        cy.get('.company__tag', { timeout: 10000 }).should('be.visible');
    }

    ValidarDadosEmpresa() {
        cy.xpath('(//div[@class="options__card"])[1]').click();
        cy.get('.titulo_painel_padrao', { timeout: 10000 }).should('be.visible');
    }

    ValidarDadosUsuario() {
        cy.xpath('(//div[@class="options__card"])[2]').click();
        cy.get('#cphConteudo_lblTitulo', { timeout: 10000 }).should('be.visible');
    }

    ValidarMeuPlano() {
        cy.xpath('//div[@class="options__card "]').click();
        cy.get('#conteudo', { timeout: 10000 }).should('be.visible');
    }

}

export default new ConfiguracoesPage();


