import LoginPage from '../pages/loginPage'
import HomeNome_InstituiçãoPage from '../pages/homeNome_InstituiçãoPage';


describe('Validação da Home-Nome_Instituição', () => {
  it('Deve buscar uma vaga', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoPage.buscarVaga();
  })

  it('Deve clicar no botão Quero usar o Potencial Nome_Instituição', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoPage.botaoQueroUsarPotencialNome_Instituição();
  })

  it('Deve clicar no botão Quero usar o Potencial VIP', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoPage.botaoQueroUsarPotencialVIP();
  })

  it('Deve clicar em Vagas de Emprego Onde Estiver', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoPage.vagasEmpregoOndeEstiver();
  } );

  it('Deve clicar em Trabalhe Conosco', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoPage.trabalheCosnosco();
  });

  it('Deve clicar em Cadastrar Currículo Grátis', () => {
    LoginPage.visitar();
    HomeNome_InstituiçãoPage.cadastrarCurriculoGratis();
  });

})
