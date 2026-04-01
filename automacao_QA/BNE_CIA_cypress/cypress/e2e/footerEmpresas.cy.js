import LoginPage from '../pages/loginPage'
import users from '../fixtures/users.json'
import FooterEmpresas from '../pages/footerEmpresasPage'

describe('Valida redirecionamentos footer - Empresas', () => {
  it('Pesquisar Curriculos', () => {
    FooterEmpresas.pesquisarCurriculos();
  })

  it('Admissao Digital', () => {
    FooterEmpresas.admissaoDigital();
  })

  it('Anunciar Vagas', () => {
    FooterEmpresas.anunciarVagas();
  })

  it('Cadastrar Empresa', () => {
    FooterEmpresas.cadastrarEmpresa();
  })

  it('Gestao Processo Seletivo', () => {
    FooterEmpresas.gestaoProcessoSeletivo();
  })

  it('Minhas Vagas', () => {
    FooterEmpresas.minhasVagas();
  })

  it('Planos', () => {
    FooterEmpresas.planos();
  })

  it('Sala Selecionadora', () => {
    FooterEmpresas.salaSelecionadora();
  })

  it('Seja Parceiro', () => {
    FooterEmpresas.sejaParceiro();
  })

  it('Site Trabalhe Conosco', () => {
    FooterEmpresas.siteTrabalheConosco();
  })

})





