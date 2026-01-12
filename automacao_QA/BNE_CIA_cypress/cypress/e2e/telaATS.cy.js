import telaATSPage from '../pages/telaATSPage'

describe('Validação de Tela ATS', () => {
  it('Deve acessar a página para anúncio de vaga', () => {
    telaATSPage.clicarAnunciarVaga();
  })

})
