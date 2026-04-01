
// Aguarda a navegação para o domínio de login
const ambiente = Cypress.env('AMBIENTE') || 'prod';
const originUrl = ambiente === 'stg'
  ? 'https://staging-id.bne.com.br'
  : 'https://id.bne.com.br';

class HomeBNECIAPage {
  irparaHomeBNECIA() {
    cy.contains('Para empresas', { timeout: 10000 }).click();
    cy.contains('Home', { timeout: 10000 }).click();
  }


  anuncieVagaGratis() {
    this.irparaHomeBNECIA();
    cy.get('a[class="advertise_free effect effect-1"]', { timeout: 10000 }).click();

    cy.origin(originUrl, () => {
      // Ignora erros dentro do origin
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes("windowObjectReference") || err.message.includes("elemAdsPainel")) {
          return false;
        }
      });
      cy.get('input[name="Email"]', { timeout: 10000 }).should('be.visible');
    });
  }

  cadastreSuaEmpresa() {
    this.irparaHomeBNECIA();
    cy.xpath('(//a[@class="register_company"])[2]', { timeout: 10000 }).click();
    cy.get('.card', { timeout: 10000 }).should('be.visible');
  }

  saibaMaisCardBNECursos() {
    this.irparaHomeBNECIA();
    //Saiba mais BNE Cursos
    cy.xpath('(//a[@class="animate_link"])[3]') // ou o seletor do seu botão
      .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
      .should('have.attr', 'href')              // garante que tem o link
      .then((href) => {
        expect(href).to.include('https://emprego.bne.com.br/bnecursos');
        cy.request(href).its('status').should('eq', 200);
      });
  }

  saibaMaisCardBNEPesquisaCandidatos() {
    this.irparaHomeBNECIA();

    //Saiba mais Pesquisa de Candidatos
    cy.xpath('(//a[@class="animate_link"])[1]').click();
    cy.contains('Busque candidatos por todo o Brasil!', { timeout: 10000 }).should('be.visible');
  }

  saibaMaisCardGestaoCandidatosVagas() {
    this.irparaHomeBNECIA();

    //Saiba mais Gestão de Candidatos e Vagas
    cy.xpath('(//a[@class="animate_link"])[2]').click();
    cy.contains('Gestão de vagas e candidatos', { timeout: 10000 }).should('be.visible');
  }

  saibaMaisCardAdmissaoDigital() {
    this.irparaHomeBNECIA();
    //Saiba mais Admissão Digital
    cy.xpath('(//a[@class="animate_link"])[4]').click();
    cy.contains('Admissões Digitais', { timeout: 10000 }).should('be.visible');
  }

  saibaMaisCardPaginaCarreiras() {
    this.irparaHomeBNECIA();
    //Saiba mais Página de Carreiras
    cy.xpath('(//a[@class="animate_link"])[5]').click();
    cy.contains('Um lugar próprio para divulgar as vagas da sua empresa', { timeout: 10000 }).should('be.visible');
  }

  pesquiarCurriculos() {
    this.irparaHomeBNECIA();
    cy.get('a[title="Pesquisar Currículo"]', { timeout: 10000 }).click();
    cy.origin(originUrl, () => {
      // Ignora erros dentro do origin
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes("windowObjectReference") || err.message.includes("elemAdsPainel")) {
          return false;
        }
      });
      cy.get('input[name="Email"]', { timeout: 10000 }).should('be.visible');
    });
  }
}

export default new HomeBNECIAPage();