import LoginPage from '../pages/loginPage'
import HomeBNEPage from '../pages/homeBNEPage';


describe('Validação da Home-BNE', () => {
  it('Deve buscar uma vaga', () => {
    LoginPage.visitar();
    HomeBNEPage.buscarVaga();
  })

  it('Deve clicar no botão Quero usar o Potencial BNE', () => {
    LoginPage.visitar();
    HomeBNEPage.botaoQueroUsarPotencialBNE();
  })

  it('Deve clicar no botão Quero usar o Potencial VIP', () => {
    LoginPage.visitar();
    HomeBNEPage.botaoQueroUsarPotencialVIP();
  })

  it('Deve clicar em Vagas de Emprego Onde Estiver', () => {
    LoginPage.visitar();
    HomeBNEPage.vagasEmpregoOndeEstiver();
  } );

  it('Deve clicar em Trabalhe Conosco', () => {
    LoginPage.visitar();
    HomeBNEPage.trabalheCosnosco();
  });

  it('Deve clicar em Cadastrar Currículo Grátis', () => {
    LoginPage.visitar();
    HomeBNEPage.cadastrarCurriculoGratis();
  });

})
