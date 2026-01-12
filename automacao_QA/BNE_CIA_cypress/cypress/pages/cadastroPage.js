import LoginPage from './loginPage';

const usuarioFactory = require('../fixtures/usuarioFactory');


class CadastroPage {

    clicarParaCadastrar() {
        LoginPage.visitar();
        cy.contains('Para empresas', { timeout: 10000 }).click();
        cy.get('a[title="cadastro empresa grátis"]', { timeout: 10000 }).click();
        cy.get('.card', { timeout: 10000 }).should('be.visible');
    }

    realizarCadastroValido() {
        this.clicarParaCadastrar();
        const usuario = usuarioFactory.createUsuario();

        cy.get('#cnpj').type(usuario.cnpj);
        cy.get('#PhoneNumber').type(usuario.telefone);
        cy.get('#NomeFantasia').type(usuario.nomeFantasia);
        cy.get('#RazaoSocial').type(usuario.nomeSocial);

        //quantidade de funcionarios e admissoes mensais
        cy.get('#QuantidadeFuncionario').clear().type('150');
        cy.get('#quantidadeAdmissaoMensal').clear().type('3');

        //aréa de atuação
        cy.get('#areaAtuacao').select('Administrativo');

        //endereço da sua Empresa
        cy.get('#inputCEP').type(usuario.endereco.CEP);
        cy.get('#inputNumero').click();
        cy.wait(5000);
        cy.get('#inputNumero').type(usuario.endereco.numero);

        //dados de usuário
        cy.get('#nome').type(usuario.nomeFantasia);
        cy.get('#email').type(usuario.email);
        cy.get('#nascimento').type(usuario.data_nascimento);
        cy.get('#cpf').type(usuario.CPF);
        cy.get('#celularUsuario').type(usuario.telefone);
        cy.get('#password').type(usuario.senha);
        cy.get('#confirm_password').type(usuario.senha);

    }

    clicarSubmit() {
        cy.get('button[type="submit"]').click();
    }

    obrigatoridadeCampos() {
        this.clicarParaCadastrar();
        cy.get('button[type="submit"]').click();
        cy.get('#cnpj-error').should('be.visible');
        cy.get('#PhoneNumber-error').should('be.visible');
        cy.get('#NomeFantasia-error').should('be.visible');
        cy.get('#RazaoSocial-error').should('be.visible');

        //quantidade de funcionarios e admissoes mensais
        cy.get('#QuantidadeFuncionario-error').should('be.visible');
        cy.get('#quantidadeAdmissaoMensal-error').should('be.visible');

        //aréa de atuação
        //cy.get('#areaAtuacao-error').should('be.visible');

        //endereço da sua Empresa
        cy.get('#inputCEP-error').should('be.visible');
        cy.get('#inputNumero-error').should('be.visible');

        //dados de usuário
        cy.get('#nome-error').should('be.visible');
        cy.get('#email-error').should('be.visible');
        cy.get('#nascimento-error').should('be.visible');
        cy.get('#cpf-error').should('be.visible');
        cy.get('#celularUsuario-error').should('be.visible');
        cy.get('#password-error').should('be.visible');
        cy.get('#confirm_password-error').should('be.visible');
    }

    naoAceitarTermos() {
        this.clicarParaCadastrar();
        this.realizarCadastroValido();
        //desmarcar checkbox termos de uso
        cy.get('input[id="styled-checkbox-1"]').click({ force: true });
        cy.get('input[id="styled-checkbox-2"]').click({ force: true });
        this.clicarSubmit();
        cy.get('#AceitaPolíticaPrivacidade-error').should('be.visible');
        cy.get('#PermiteEnvioEmail-error').should('be.visible');
    }

    validarCondicoesLegais() {
        this.clicarParaCadastrar();
        cy.contains('Condições Legais', { timeout: 10000 }).click();
        cy.get('div[class="privacy__titles w-100"] h1', { timeout: 10000 }).should('be.visible');
    }

    validaPoliticaPrivacidade() {
        this.clicarParaCadastrar();
        cy.contains('Política de Privacidade', { timeout: 10000 }).click();
        cy.get('div[class="privacy__titles w-100"] h1', { timeout: 10000 }).should('be.visible');
    }

    validaCNPJInvalido() {
        this.clicarParaCadastrar();
        cy.get('#cnpj').type('11.111.111/1111-11');
        cy.get('#PhoneNumber', {timeout: 1000}).click();
        cy.contains('O CNPJ informado é inválido').should('be.visible');
    }

    validaCNPJCadastrado(){
        this.clicarParaCadastrar();
        const usuario = usuarioFactory.createUsuario();

        cy.get('#cnpj').type('91.492.406/0001-94');
        cy.get('#PhoneNumber').type(usuario.telefone);
        cy.get('#NomeFantasia').type(usuario.nomeFantasia);
        cy.get('#RazaoSocial').type(usuario.nomeSocial);

        //quantidade de funcionarios e admissoes mensais
        cy.get('#QuantidadeFuncionario').clear().type('150');
        cy.get('#quantidadeAdmissaoMensal').clear().type('3');

        //aréa de atuação
        cy.get('#areaAtuacao').select('Administrativo');

        //endereço da sua Empresa
        cy.get('#inputCEP').type(usuario.endereco.CEP);
        cy.get('#inputNumero').click();
        cy.wait(5000);
        cy.get('#inputNumero').type(usuario.endereco.numero);

        //dados de usuário
        cy.get('#nome').type(usuario.nomeFantasia);
        cy.get('#email').type(usuario.email);
        cy.get('#nascimento').type(usuario.data_nascimento);
        cy.get('#cpf').type(usuario.CPF);
        cy.get('#celularUsuario').type(usuario.telefone);
        cy.get('#password').type(usuario.senha);
        cy.get('#confirm_password').type(usuario.senha);
        this.clicarSubmit();
        cy.get('.modal-body.modal-cnpj-registered__body').should('be.visible');
        cy.contains('CNPJ já cadastrado').should('be.visible');
    }

    validaCPFCadastrado(){
              this.clicarParaCadastrar();
        const usuario = usuarioFactory.createUsuario();

        cy.get('#cnpj').type(usuario.cnpj);
        cy.get('#PhoneNumber').type(usuario.telefone);
        cy.get('#NomeFantasia').type(usuario.nomeFantasia);
        cy.get('#RazaoSocial').type(usuario.nomeSocial);

        //quantidade de funcionarios e admissoes mensais
        cy.get('#QuantidadeFuncionario').clear().type('150');
        cy.get('#quantidadeAdmissaoMensal').clear().type('3');

        //aréa de atuação
        cy.get('#areaAtuacao').select('Administrativo');

        //endereço da sua Empresa
        cy.get('#inputCEP').type(usuario.endereco.CEP);
        cy.get('#inputNumero').click();
        cy.wait(5000);
        cy.get('#inputNumero').type(usuario.endereco.numero);

        //dados de usuário
        cy.get('#nome').type(usuario.nomeFantasia);
        cy.get('#email').type(usuario.email);
        cy.get('#nascimento').type(usuario.data_nascimento);
        cy.get('#cpf').type('67623363026');
        cy.get('#celularUsuario').type(usuario.telefone);
        cy.get('#password').type(usuario.senha);
        cy.get('#confirm_password').type(usuario.senha);
        this.clicarSubmit();
        cy.get('.modal-body.modal-cpf-registered__body').should('be.visible');
        cy.contains('CPF já cadastrado!').should('be.visible');
    }
}

export default new CadastroPage;
