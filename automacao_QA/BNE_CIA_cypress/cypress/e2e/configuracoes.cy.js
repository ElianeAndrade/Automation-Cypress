import configuracoesPage from "../pages/configuracoesPage";
import users from "../fixtures/users.json";

describe('Módulo Configurações', () => {

    beforeEach(() => {
        configuracoesPage.AcessarModuloConfiguracoes();
    });

    it('Deve verificar o retorno do Módulo Configurações', () => {
        cy.get('.company__tag').should('be.visible');
    });

    it('Deve validar os dados da empresa no Módulo Configurações', () => {
        configuracoesPage.ValidarDadosEmpresa();
    });

    it('Deve validar os dados do usuário no Módulo Configurações', () => {
        configuracoesPage.ValidarDadosUsuario();
    });

    it('Deve validar o meu plano no Módulo Configurações', () => {
        configuracoesPage.ValidarMeuPlano();
    }); 
});