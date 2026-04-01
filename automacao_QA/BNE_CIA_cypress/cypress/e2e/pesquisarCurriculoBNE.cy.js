import loginPage from "../pages/loginPage";
import pesquisarCurriculoBNEPage from "../pages/pesquisarCurriculoBNEPage";
import users from "../fixtures/users.json";

describe('Fluxo de Pesquisa no BNE', () => {
    it('Deve pesquisar um currículo com sucesso', () => {
        pesquisarCurriculoBNEPage.PesquisarBNE();
        pesquisarCurriculoBNEPage.DescartarSalvamentoFiltro();
        pesquisarCurriculoBNEPage.SucessoNaPesquisaCurriculo();
    });

    it('Deve salvar um filtro de pesquisa', () => {
        pesquisarCurriculoBNEPage.SalvarFiltro();
        pesquisarCurriculoBNEPage.DeletandoFiltroTeste();
    });

    it('Deve renomear um filtro salvo', () => {
        pesquisarCurriculoBNEPage.RenomearFiltroSalvo();
    });

    it('Deve deletar um filtro salvo', () => {
        pesquisarCurriculoBNEPage.DeletandoFitroSalvo();
    });

    it('Deve atualizar um filtro salvo', () => {    
        pesquisarCurriculoBNEPage.AtualizarFiltroSalvo();
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
