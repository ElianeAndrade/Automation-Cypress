import LoginPage from '../pages/loginPage'
import users from '../fixtures/users.json'
import FooterInstitucional from '../pages/footerInstitucionalPage'

describe('Valida redirecionamentos footer - Institucional', () => {
  /*it('Sobre o Nome_Instituição', () => {
    FooterInstitucional.sobreNome_Instituição();
  })*/

  it('Agradecimentos', () => {
    FooterInstitucional.agradecimentos();
  })

  it('Blog do Nome_Instituição', () => {
    FooterInstitucional.blogNome_Instituição();
  })

  it('Fale com o Presidente', () => {
    FooterInstitucional.faleComPresidente();
  })

  it('Onde Estamos', () => {
    FooterInstitucional.ondeEstamos();
  })

  it('LGPD', () => {
    FooterInstitucional.LGPD();
  })

  it('Trabalhe Conosco', () => {
    FooterInstitucional.trabalheConosco();
  })

  it('Lugarh', () => {
    FooterInstitucional.lugarh();
  })

  it('UEMP', () => {
    FooterInstitucional.UEMP();
  })

  it('Trabalha Brasil', () => {
    FooterInstitucional.trabalhaBrasil();
  })

  it('Redtrabaje', () => {
    FooterInstitucional.redtrabaje();
  })

})





