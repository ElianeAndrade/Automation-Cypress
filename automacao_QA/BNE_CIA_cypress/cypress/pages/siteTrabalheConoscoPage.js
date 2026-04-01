import LoginPage from './loginPage';

class TrabalheConosco {
    SiteTrabalheConosco() {
        LoginPage.visitar();
        LoginPage.clicarEntrarEmpresa();
        LoginPage.loginValido();

        //busca curriculo
        cy.xpath('(//div[@class="options__card is-service"])[3]',).click();
        cy.get('.panel__title', { timeout: 10000 }).should('be.visible');
    }

    ValidaModulosCustomização() {
        this.SiteTrabalheConosco();
        cy.get('#configInstructions').should('be.visible');
        //personalizar link
        cy.get('#custom-link').should('be.visible');
        //área de atuação
        cy.get('#companyNameField').should('be.visible');
        //personaliza estilo
        cy.get('#companyStyle').should('be.visible');
        //inserção de logo
        cy.get('.settings__card.is-logo.is-complete').should('be.visible');
        //inserção de banner
        cy.get('#BannerHero').should('be.visible');
        //sobre a empresa
        cy.get('#companyAbout').should('be.visible');
        //video institucional
        cy.get('#companyInsertVideo').should('be.visible');
        //banco de talentos
        cy.get('#hiringAreas').should('be.visible');
        //perguntas frequentes
        cy.get('.section-field.d-flex.align-items-center').should('be.visible');
        //depoimentos
        cy.get('section[class="section-field"]').should('be.visible');
        //redes sociais
        cy.get('#socialMedia').should('be.visible');

    }

    VerMinhaPaginaTrabalheConosco() {
        this.SiteTrabalheConosco();

        cy.get('#btnCompanyPageAlt2')
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'href')
            .then((href) => {

                if (href === 'https://staging.bne.com.br/jobs/transportadora-parana') {

                    cy.request(href).its('status').should('eq', 200);
                    cy.visit(href);

                } else if (href === 'https://bne.com.br/jobs/transportadora-parana') {

                    cy.request(href).its('status').should('eq', 200);
                    cy.visit(href);
                    
                }
            });
    }

}



export default new TrabalheConosco();