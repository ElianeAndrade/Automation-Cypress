import { ignoreKnownErrors } from '../support/utils';

const ambiente = Cypress.env('AMBIENTE')?.toLowerCase() || 'prod';
const origin = ambiente === 'stg'
  ? 'https://staging-id-pf-sts.bne.com.br'
  : 'https://id-pf-sts.bne.com.br';


class HomeBNEPage {
  buscarVaga() {
    cy.get('input[name="funcaoBuscaVagas"]').type('Qualidade', { timeout: 10000 });
    cy.contains('Agente de Controle de Qualidade').click();
    cy.get('button[type="submit"]').click();
    cy.get('h1[class="result-title"]', { timeout: 10000 }).should('be.visible');
  }

  botaoQueroUsarPotencialBNE() {
    cy.get('a[title="Quero usar todo o potencial do BNE"]').click();
    cy.wait(5000);
    cy.origin(origin, { args: {} }, () => {
      // Ignora erros dentro do origin (exceções não tratadas)
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes("windowObjectReference") || err.message.includes("elemAdsPainel")) {
          return false;
        }
      });
      cy.get('h1', { timeout: 10000 }).should('be.visible');
    });
  }

  botaoQueroUsarPotencialVIP() {
    cy.get('a[title="Quero usar todo o potencial do VIP"]').click();
    cy.wait(5000);
    cy.origin(origin, { args: {} }, () => {
      // Ignora erros dentro do origin
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes("windowObjectReference") || err.message.includes("elemAdsPainel")) {
          return false;
        }
      });
      cy.get('h1', { timeout: 10000 }).should('be.visible');
    });
  }

  vagasEmpregoOndeEstiver() {
    cy.get('a[title="Vagas de emprego em Curitiba - PR"]').click();
    cy.get('h1[class="result-title"]', { timeout: 10000 }).should('be.visible');
  }

  trabalheCosnosco() {
    cy.get('a[title="Employer"]').click();
    cy.get('h1[class="companyColor"]', { timeout: 10000 }).should('be.visible');
  }

  cadastrarCurriculoGratis() {
    cy.get('a[class="btn-purple-hover-effect button-step-bne-track"]').click({ force: true });
    cy.get('div[class="container backstage__item identity__card__body"]', { timeout: 10000 }).should('be.visible');
  }
}

export default new HomeBNEPage();