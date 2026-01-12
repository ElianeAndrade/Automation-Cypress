import PlanosPage from '../pages/planosPage';
import CadastroPage from '../pages/cadastroPage';
import LoginPage from "../pages/loginPage";

describe('Módulo Comprar Plano', () => {

    beforeEach(() => {
        CadastroPage.realizarCadastroValido();
        CadastroPage.clicarSubmit();
        cy.wait(5000);
        LoginPage.validaSeLogouComSucesso();

        // Acessa o módulo de configurações
        cy.xpath('(//div[@class="options__card"])[5]').click();
        cy.get('.company__tag', { timeout: 10000 }).should('be.visible');
    }); 


    it('Deve validar a tela de planos', () => {
        PlanosPage.ValidaTelaDePlanos();

    });

    it('Deve validar os valores dos planos', () => {
        PlanosPage.ValidaValoresDosPlanos();
    });

    it('Deve comprar o plano básico via boleto', () => {
        PlanosPage.CompraPlanoBoleto();
    });

    //teste  nome do arquivo

});