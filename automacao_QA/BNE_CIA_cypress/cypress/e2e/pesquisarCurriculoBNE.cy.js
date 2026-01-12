import loginPage from "../pages/loginPage";
import pesquisarCurriculoBNEPage from "../pages/pesquisarCurriculoBNEPage";
import users from "../fixtures/users.json";

describe('Fluxo de Pesquisa no BNE', () => {
    it('Deve pesquisar um currículo com sucesso', () => {
        pesquisarCurriculoBNEPage.PesquisarEclicarNoCurriculo();
    });

    it('Deve visualizar os dados de contato do currículo', () => {
        pesquisarCurriculoBNEPage.visualizarDadosDoCurriculo();
    });

    it('Deve validar botão de enviar uma mensagem para o candidato', () => {
        pesquisarCurriculoBNEPage.botaoEnviarMensagem();
    });

    it('Deve validar botão de encaminhar currículo', () => {
        pesquisarCurriculoBNEPage.botaoEncaminharCurriculo();
    });

    it('Deve validar botão de inscrever em uma vaga', () => {
        pesquisarCurriculoBNEPage.botaoInscreverEmUmaVaga();
    });
})
