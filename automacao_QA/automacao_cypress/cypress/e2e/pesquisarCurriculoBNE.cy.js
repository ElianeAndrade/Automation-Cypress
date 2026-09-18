import loginPage from "../pages/loginPage";
import pesquisarCurriculoNome_InstituiçãoPage from "../pages/pesquisarCurriculoNome_InstituiçãoPage";
import users from "../fixtures/users.json";

describe('Fluxo de Pesquisa no Nome_Instituição', () => {
    it('Deve pesquisar um currículo com sucesso', () => {
        pesquisarCurriculoNome_InstituiçãoPage.PesquisarNome_Instituição();
        pesquisarCurriculoNome_InstituiçãoPage.DescartarSalvamentoFiltro();
        pesquisarCurriculoNome_InstituiçãoPage.SucessoNaPesquisaCurriculo();
    });

    it('Deve salvar um filtro de pesquisa', () => {
        pesquisarCurriculoNome_InstituiçãoPage.SalvarFiltro();
        pesquisarCurriculoNome_InstituiçãoPage.DeletandoFiltroTeste();
    });

    it('Deve renomear um filtro salvo', () => {
        pesquisarCurriculoNome_InstituiçãoPage.RenomearFiltroSalvo();
    });

    it('Deve deletar um filtro salvo', () => {
        pesquisarCurriculoNome_InstituiçãoPage.DeletandoFitroSalvo();
    });

    it('Deve atualizar um filtro salvo', () => {    
        pesquisarCurriculoNome_InstituiçãoPage.AtualizarFiltroSalvo();
    });

    it('Deve visualizar os dados de contato do currículo', () => {
        pesquisarCurriculoNome_InstituiçãoPage.visualizarDadosDoCurriculo();
    });

    it('Deve validar botão de enviar uma mensagem para o candidato', () => {
        pesquisarCurriculoNome_InstituiçãoPage.botaoEnviarMensagem();
    });

    it('Deve validar botão de encaminhar currículo', () => {
        pesquisarCurriculoNome_InstituiçãoPage.botaoEncaminharCurriculo();
    });

    it('Deve validar botão de inscrever em uma vaga', () => {
        pesquisarCurriculoNome_InstituiçãoPage.botaoInscreverEmUmaVaga();
    });
})
