import LoginPage from "./loginPage";

class PlanosPage {
    ValidaTelaDePlanos() {
        cy.xpath('//div[@class="options__card "]').click();
        //valida titulo da tela
        cy.get('.title-escolha-de-planos').should('contain.text', 'Selecione o melhor plano para sua empresa:');
        //valida cards basico, avançado e personalizado
        cy.get('a[data-plan-link="basico"]').should('be.visible');
        cy.get('a[data-plan-link="avancado"]').should('be.visible');
        cy.xpath('(//div[@class="plan-card"])[3]').should('be.visible');
        //valida se perguntas frequentes estão presentes na tela
        cy.get('.faq-wrapper').should('contain.text', 'Perguntas Frequentes');

        //valida mini-banners ao lado de perguntas frequentes
        cy.get('.bloco-candidato-ideal').should('be.visible');

    }

    ValidaValoresDosPlanos() {
        //valida valores dos planos basico e avançado (mensal e anual)
        //clicando na flag mensal
        cy.xpath('//div[@class="options__card "]').click();
        //básico
        cy.get('#mensalBtn').click().should('have.class', 'active');
        cy.get('h3[data-plan-price="basico"]').should('contain.text', '399,00');
        //avançado
        cy.get('h3[data-plan-price="avancado"]').should('contain.text', '499,00');

        //clicando na flag anual
        cy.get('#anualBtn').click().should('have.class', 'active');
        //básico
        cy.get('h3[data-plan-price="basico"]').should('contain.text', '199,00');
        //avançado
        cy.get('h3[data-plan-price="avancado"]').should('contain.text', '299,00');
        //clicando em Falar com um Atendente
        cy.xpath('(//a[@class="btn-plan"])[3]')
            .should('be.visible')
            .should('have.attr', 'target', '_blank') // confirma que abre em nova aba
            .should('have.attr', 'href')
            .then((href) => {
                expect(href).to.include('https://api.whatsapp.com/send');
                expect(href).to.include('phone=5511964497447');
                expect(href).to.include('Plano+Personalizado');
            });
    }

    CompraPlanoBoleto() {
        //implementar compra do plano via boleto
        cy.xpath('//div[@class="options__card "]').click();
        //seleciona plano básico - anual
        cy.get('#anualBtn').click().should('have.class', 'active');
        //clicar em 'eu quero' plano básico
        cy.xpath('(//a[@class="btn-plan"])[1]').click();
        //valida página de pagamentos
        cy.get('.pagamento__box__CustomPlanPagamento').should('be.visible');
        //seleciona forma de pagamento boleto
        cy.get('#paymentMethodBoleto').click();
        //imprimir boleto
        cy.get('button[type="submit"]').click()
            //valida boleto gerado
            .should('have.attr', 'href')
            .then((href) => {
                expect(href).to.include('boletos.iugu.com');
                expect(href).to.include('/bank_slip');
                expect(href).to.match(/invoice\/.+\/bank_slip/); //valida a url do boleto

                cy.contains('Boleto Bancário').should('be.visible');
                cy.contains('Pagável em qualquer banco').should('be.visible');
            });
    }

}

export default new PlanosPage();

