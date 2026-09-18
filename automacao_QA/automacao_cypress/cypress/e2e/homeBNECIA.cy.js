import LoginPage from '../pages/loginPage'
import HomeNome_InstituiçãoCIAPage from '../pages/homeNome_InstituiçãoCIAPage';


describe('Validação da Home-Nome_InstituiçãoCIA', () => {
  it('Deve clicar em Anuncie uma vaga grátis', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoCIAPage.anuncieVagaGratis();
  }
  );

  it('Deve clicar em Cadastre sua empresa ', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoCIAPage.cadastreSuaEmpresa();
  })

  it('Deve clicar em Saiba mais - Nome_Instituição Cursos', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoCIAPage.saibaMaisCardNome_InstituiçãoCursos();
  });

  it('Deve clicar em Saiba mais - Nome_Instituição Pesquisa de Candidatos', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoCIAPage.saibaMaisCardNome_InstituiçãoPesquisaCandidatos();
  });

  it('Deve clicar em Saiba mais - Gestão de Candidatos e Vagas', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoCIAPage.saibaMaisCardGestaoCandidatosVagas();
  });

  it('Deve clicar em Saiba mais - Admissão Digital', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoCIAPage.saibaMaisCardAdmissaoDigital();
  });

  it('Deve clicar em Saiba mais - Página de Carreiras', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoCIAPage.saibaMaisCardPaginaCarreiras();
  });

})
