import LoginPage from './loginPage';

class PesquisarCurriculoNome_Instituição {
    PesquisarNome_Instituição() {
        LoginPage.visitar();
        LoginPage.clicarEntrarEmpresa();
        LoginPage.loginValido();

        //busca curriculo
        cy.xpath('(//div[@class="options__card is-service"])[2]').click();
        cy.wait(3000);
        cy.get('.mat-form-field-infix.ng-tns-c72-0').type('Analista de Testes');
        cy.get('#avancada-footer-btn-pesquisa').click();
    }

    DescartarSalvamentoFiltro() {
        cy.get('.card-salvar__secondary').click();
        cy.wait(3000);
    }

    SucessoNaPesquisaCurriculo() {
        cy.xpath('(//div[contains(@class, "result__item")])[1]').should('be.visible');
    }

    SalvarFiltro() {
        this.PesquisarNome_Instituição();
        cy.get('.card-salvar__primary').click();
        cy.get('input[class*="nomear-filtros-input-field"]').should('be.visible').type('Filtro automação Cypress');
        cy.get('button[class*="nomear-filtros-primary-btn"]').click();
        cy.wait(3000);
        cy.contains('Filtro salvo com sucesso!', { timeout: 10000 }).should('be.visible');
        cy.wait(3000);
        
    }

    RenomearFiltroSalvo() {
        this.SalvarFiltro();
        cy.xpath('(//div[contains(@class, "filtro-select-trigger")])[3]').click();
        cy.xpath('(//span[@title="Editar"])[1]').click();
        cy.get('input[class*="nomear-filtros-input-field"]').should('be.visible').clear().type('Filtro Renomeado');
        cy.get('button[class*="nomear-filtros-primary-btn"]').click();
        cy.wait(3000);
        cy.xpath('(//div[@class="saved-filter-summary__title"])[2]').should('have.text', 'Filtro Renomeado');
        cy.wait(3000);
        this.DeletandoFiltroTeste();


    }

    DeletandoFiltroTeste() {
        cy.xpath('(//div[contains(@class, "filtro-select-trigger")])[3]').click();
        cy.xpath('(//span[@title="Excluir"])[1]').click();
        cy.wait(3000);
        cy.get('.card-excluir__button').click();
        cy.contains('O critério foi deletado com sucesso', { timeout: 10000 }).should('be.visible');
    }
    
    DeletandoFitroSalvo() {
        this.SalvarFiltro();
        cy.xpath('(//div[contains(@class, "filtro-select-trigger")])[3]').click();
        cy.xpath('(//span[@title="Excluir"])[1]').click();
        cy.wait(3000);
        cy.get('.card-excluir__button').click();
        cy.contains('O critério foi deletado com sucesso', { timeout: 10000 }).should('be.visible');
    }

    AtualizarFiltroSalvo() {
        this.SalvarFiltro();
        //adicionando idade minima
        cy.xpath('(//div[contains(@class, "mat-form-field-infix")])[15]').click();
        cy.contains('mat-option', 'Ensino Médio Completo').click();
        cy.xpath('(//button[@aria-label="Atualizar filtro salvo"])[2]').click();
        cy.contains('Filtro atualizado com sucesso!', { timeout: 10000 }).should('be.visible');
        cy.wait(3000);
        this.DeletandoFiltroTeste();
    }

    PesquisarEclicarNoCurriculo() {
        this.PesquisarNome_Instituição();
        this.DescartarSalvamentoFiltro();
        this.SucessoNaPesquisaCurriculo();
        cy.xpath('(//div[contains(@class, "result__item")])[1]').click();
        cy.get('.curriculo.ng-star-inserted').should('be.visible');
    }

    visualizarDadosDoCurriculo() {
        this.PesquisarEclicarNoCurriculo();
        cy.wait(3000);

        cy.get('body').then(($body) => {
            const hasButton = $body.find('button:contains("VISUALIZAR DADOS DE CONTATO")').length > 0;

            if (hasButton) {
                cy.contains('button', 'VISUALIZAR DADOS DE CONTATO')
                    .should('be.visible')
                    .click();
            }
        });

        // sempre valida o telefone (independente do botão)
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
            .type('eliandeandrade@Nome_Instituição.com.br');

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

export default new PesquisarCurriculoNome_Instituição();