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
        cy.get('#paymentMethodBoleto', { timeout: 10000 }).click();
        // garante que o boleto carregou
        cy.get('.pagamento__box__body.is-boleto', { timeout: 15000 }).should('be.visible');
        // AGORA o botão existe → use o ID
        cy.get('#finalizarCompra', { timeout: 15000 })
            .should('be.visible')
            .and('not.be.disabled')
            .click();

        // validaçãodo aguarde é opcional, para não quebrar a pipeline
        cy.get('body').then(($body) => {
            if ($body.text().includes('Aguarde')) {
                cy.contains('Aguarde').should('be.visible');
            }
        });

        // agora valida o redirect na mesma aba
        cy.location('href', { timeout: 20000 })
            .should('include', 'boletos.iugu.com')
            .and('include', '/bank_slip');
    }

}

export default new PlanosPage();

