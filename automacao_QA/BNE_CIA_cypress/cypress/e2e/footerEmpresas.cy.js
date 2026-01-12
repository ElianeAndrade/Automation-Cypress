import LoginPage from '../pages/loginPage'
import users from '../fixtures/users.json'
import footerEmpresas from '../pages/footerEmpresas'

describe('Valida redirecionamentos footer - Empresas', () => {
  it('Admissao Digital', () => {
    footerEmpresas.admissaoDigital();
  })

  it('Anunciar Vagas', () => {
    footerEmpresas.anunciarVagas();
  })

  it('Cadastrar Empresa', () => {
    footerEmpresas.cadastrarEmpresa();
  })

  it('Gestao Processo Seletivo', () => {
    footerEmpresas.gestaoProcessoSeletivo();
  })

  it('Minhas Vagas', () => {
    footerEmpresas.minhasVagas();
  })

  it('Pesquisar Curriculos', () => {
    footerEmpresas.pesquisarCurriculos();
  })

  it('Planos', () => {
    footerEmpresas.planos();
  })

  it('Sala Selecionadora', () => {
    footerEmpresas.salaSelecionadora();
  })

  it('Seja Parceiro',  () => {
    footerEmpresas.sejaParceiro();
  })

  it('Site Trabalhe Conosco', () => {
    footerEmpresas.siteTrabalheConosco();
  })

})





