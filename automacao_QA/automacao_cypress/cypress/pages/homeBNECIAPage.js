
// Aguarda a navegação para o domínio de login
const ambiente = Cypress.env('AMBIENTE') || 'prod';
const originUrl = ambiente === 'stg'
  ? 'https://staging-id.Nome_Instituição.com.br'
  : 'https://id.Nome_Instituição.com.br';

class HomeNome_InstituiçãoCIAPage {
  irparaHomeNome_InstituiçãoCIA() {
    cy.contains('Para empresas', { timeout: 10000 }).click();
    cy.contains('Home', { timeout: 10000 }).click();
  }


  anuncieVagaGratis() {
    this.irparaHomeNome_InstituiçãoCIA();
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
    this.irparaHomeNome_InstituiçãoCIA();
    cy.xpath('(//a[@class="register_company"])[2]', { timeout: 10000 }).click();
    cy.get('.card', { timeout: 10000 }).should('be.visible');
  }

  saibaMaisCardNome_InstituiçãoCursos() {
    this.irparaHomeNome_InstituiçãoCIA();
    //Saiba mais Nome_Instituição Cursos
    cy.xpath('(//a[@class="animate_link"])[3]') // ou o seletor do seu botão
      .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
      .should('have.attr', 'href')              // garante que tem o link
      .then((href) => {
        expect(href).to.include('https://emprego.Nome_Instituição.com.br/Nome_Instituiçãocursos');
        cy.request(href).its('status').should('eq', 200);
      });
  }

  saibaMaisCardNome_InstituiçãoPesquisaCandidatos() {
    this.irparaHomeNome_InstituiçãoCIA();

    //Saiba mais Pesquisa de Candidatos
    cy.xpath('(//a[@class="animate_link"])[1]').click();
    cy.contains('Busque candidatos por todo o Brasil!', { timeout: 10000 }).should('be.visible');
  }

  saibaMaisCardGestaoCandidatosVagas() {
    this.irparaHomeNome_InstituiçãoCIA();

    //Saiba mais Gestão de Candidatos e Vagas
    cy.xpath('(//a[@class="animate_link"])[2]').click();
    cy.contains('Gestão de vagas e candidatos', { timeout: 10000 }).should('be.visible');
  }

  saibaMaisCardAdmissaoDigital() {
    this.irparaHomeNome_InstituiçãoCIA();
    //Saiba mais Admissão Digital
    cy.xpath('(//a[@class="animate_link"])[4]').click();
    cy.contains('Admissões Digitais', { timeout: 10000 }).should('be.visible');
  }

  saibaMaisCardPaginaCarreiras() {
    this.irparaHomeNome_InstituiçãoCIA();
    //Saiba mais Página de Carreiras
    cy.xpath('(//a[@class="animate_link"])[5]').click();
    cy.contains('Um lugar próprio para divulgar as vagas da sua empresa', { timeout: 10000 }).should('be.visible');
  }

  pesquiarCurriculos() {
    this.irparaHomeNome_InstituiçãoCIA();
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

export default new HomeNome_InstituiçãoCIAPage();