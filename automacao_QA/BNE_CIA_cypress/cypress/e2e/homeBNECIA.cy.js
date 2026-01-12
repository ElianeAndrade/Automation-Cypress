import LoginPage from '../pages/loginPage'
import HomeBNECIAPage from '../pages/homeBNECIAPage';


describe('Validação da Home-BNECIA', () => {
  it('Deve clicar em Anuncie uma vaga grátis', () => {
    LoginPage.visitar();
    HomeBNECIAPage.anuncieVagaGratis();
  }
  );

  it('Deve clicar em Cadastre sua empresa ', () => {
    LoginPage.visitar();
    HomeBNECIAPage.cadastreSuaEmpresa();
  })

  it('Deve clicar em Saiba mais - BNE Cursos', () => {
    LoginPage.visitar();
    HomeBNECIAPage.saibaMaisCardBNECursos();
  });

  it('Deve clicar em Saiba mais - BNE Pesquisa de Candidatos', () => {
    LoginPage.visitar();
    HomeBNECIAPage.saibaMaisCardBNEPesquisaCandidatos();
  });

  it('Deve clicar em Saiba mais - Gestão de Candidatos e Vagas', () => {
    LoginPage.visitar();
    HomeBNECIAPage.saibaMaisCardGestaoCandidatosVagas();
  });

  it('Deve clicar em Saiba mais - Admissão Digital', () => {
    LoginPage.visitar();
    HomeBNECIAPage.saibaMaisCardAdmissaoDigital();
  });

  it('Deve clicar em Saiba mais - Página de Carreiras', () => {
    LoginPage.visitar();
    HomeBNECIAPage.saibaMaisCardPaginaCarreiras();
  });

})
