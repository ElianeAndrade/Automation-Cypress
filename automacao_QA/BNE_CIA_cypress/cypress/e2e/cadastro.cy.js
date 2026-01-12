import CadastroPage from "../pages/cadastroPage";
import LoginPage from "../pages/loginPage";

describe('Cadastro de Usuário', () => {
    it('Deve realizar cadastro válido de empresa', () => {
        CadastroPage.realizarCadastroValido();
        CadastroPage.clicarSubmit();
        cy.wait(5000);
        LoginPage.validaSeLogouComSucesso();
    })

    it('Deve validar obrigatoriedade dos campos no cadastro de empresa', () => {
        CadastroPage.obrigatoridadeCampos();
    })

    it('Não deve aceitar o cadastro sem aceitar os termos de uso', () => {
        CadastroPage.naoAceitarTermos();
    })

    it('Validar Condições Legais e Política de Privacidade', () => {
        CadastroPage.validarCondicoesLegais();
        CadastroPage.validaPoliticaPrivacidade();
    })

    it('Deve validar CNPJ inválido no cadastro de empresa', () => {
        CadastroPage.validaCNPJInvalido();
    })

    it('Deve bloquear CNPJ já cadastrado', () => {
        CadastroPage.validaCNPJCadastrado();
    })

    it('Deve bloquear CPF já cadastrado', () => {
        CadastroPage.validaCPFCadastrado();
    })
})



