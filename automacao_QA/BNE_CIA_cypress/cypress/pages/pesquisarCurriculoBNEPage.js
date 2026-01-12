import LoginPage from './loginPage';

class PesquisarCurriculoBNE {
    PesquisarBNE() {
        LoginPage.visitar();
        LoginPage.clicarEntrarEmpresa();
        LoginPage.loginValido();

        //busca curriculo
        cy.xpath('(//div[@class="options__card"])[2]').click();
        cy.wait(3000);
        cy.get('.mat-form-field-infix.ng-tns-c72-0').type('Analista de Testes');
        cy.get('#avancada-footer-btn-pesquisa').click();
        cy.wait(3000);
        cy.xpath('(//div[contains(@class, "result__item")])[1]').should('be.visible');
    }


    PesquisarEclicarNoCurriculo() {
        this.PesquisarBNE();
        cy.xpath('(//div[contains(@class, "result__item")])[1]').click();
        cy.get('.curriculo.ng-star-inserted').should('be.visible');
    }

    visualizarDadosDoCurriculo() {
        this.PesquisarEclicarNoCurriculo();
        cy.wait(3000);

        cy.get('body').then($body => {
            const botao = $body.find('button:contains("VISUALIZAR DADOS DE CONTATO")');

            if (botao.length && botao.is(':visible')) {
                cy.wrap(botao).click();
            }
        });

        cy.xpath('(//p[@class="custom__phone__p"])[1]', { timeout: 10000 })
            .should('be.visible');
    }

    botaoEnviarMensagem() {
        this.PesquisarEclicarNoCurriculo();
        cy.get('#mat-button-toggle-2-button').contains(' Enviar mensagem ').click();
        cy.get('.send__message').should('be.visible');
        cy.get('#cv-enviar-msg-btn').should('be.visible');
    }

    botaoEncaminharCurriculo() {
        this.PesquisarEclicarNoCurriculo();

        cy.contains('button', 'Encaminhar currículo', { timeout: 10000 })
            .should('be.visible')
            .click();

        cy.get('#inputEmail', { timeout: 10000 })
            .should('be.visible')
            .type('eliandeandrade@bne.com.br');

        cy.get('textarea[placeholder="Insira uma mensagem"]')
            .should('be.visible')
            .clear()
            .type('Teste automação Cypress - Encaminhar currículo');

        cy.get('#cv-encaminhar-cv-btn-enviar')
            .should('be.enabled')
            .click();

        // valida snackbar sem wait fixo
        cy.contains('.mat-snack-bar-container', 'Email enviado com sucesso!', {
            timeout: 10000
        }).should('be.visible');
    }

    botaoInscreverEmUmaVaga() {
        this.PesquisarEclicarNoCurriculo();
        cy.get('#mat-button-toggle-4-button').contains(' Inscrever em uma vaga ').click();
        cy.get('form.apply__job').should('be.visible');
        cy.get('button[type="submit"]').click();
        cy.get('.mat-simple-snackbar', { timeout: 10000 }).should('exist').and('contain', 'Nenhuma vaga válida selecionada.');
    }



}

export default new PesquisarCurriculoBNE();