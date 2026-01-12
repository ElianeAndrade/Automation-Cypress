// Uso: const factory = require('../fixtures/usuarioFactory');

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pad(n, size = 2) {
    return String(n).padStart(size, '0');
}

function randomFrom(list) {
    return list[randInt(0, list.length - 1)];
}

function generateEmail() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');
    const rnd = Math.floor(Math.random() * 900 + 100); // número aleatório de 100 a 999

    return `qa_${dia}${mes}_${hora}${minuto}_${rnd}@teste.com`;
}

// Gera CPF válido (com dígitos verificadores)
function generateCPF() {
    const nums = Array.from({ length: 9 }, () => randInt(0, 9));
    const dv1 = calcCpfDv(nums);
    const dv2 = calcCpfDv([...nums, dv1]);
    return [...nums, dv1, dv2].join('');
}

function calcCpfDv(digs) {
    let soma = 0;
    for (let i = 0; i < digs.length; i++) {
        soma += digs[i] * (digs.length + 1 - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

// Gera CNPJ válido (com dígitos verificadores)
function generateCNPJ() {
    const nums = Array.from({ length: 12 }, () => randInt(0, 9));
    const dv1 = calcCnpjDv(nums);
    const dv2 = calcCnpjDv([...nums, dv1]);
    return [...nums, dv1, dv2].join('');
}

function calcCnpjDv(digs) {
    const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos = digs.length === 12 ? pesos1 : pesos2;
    let soma = 0;
    for (let i = 0; i < digs.length; i++) soma += digs[i] * pesos[i];
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}


function formatDateBR(day = 20, month = 12, year = 1998) {
    return `${pad(day)}/${pad(month)}/${year}`;
}

function generateCEP() {
    // Lista de CEPs válidos de cidades reais
    const cepsValidos = [
        '01001-000', // São Paulo - SP
        '20040-010', // Rio de Janeiro - RJ
        '30130-010', // Belo Horizonte - MG
        '87013-230', // Maringá - PR
        '86010-630', // Londrina - PR
        '80010-000', // Curitiba - PR
        '70040-010', // Brasília - DF
    ];

    return cepsValidos[randInt(0, cepsValidos.length - 1)];
}

function generateAddress() {
    const cidades = ['Maringá', 'Londrina', 'Curitiba', 'São Paulo', 'Belo Horizonte'];
    const logradouros = [
        'Rua das Acácias', 'Avenida Brasil', 'Alameda das Flores', 'Rua do Comércio',
        'Avenida das Nações', 'Rua XV de Novembro'
    ];
    const bairros = ['Centro', 'Jardim Paulista', 'Vila Nova', 'Zona 07', 'Zona 03'];
    return {
        CEP: generateCEP(),
        cidade: randomFrom(cidades),
        logradouro: randomFrom(logradouros),
        bairro: randomFrom(bairros),
        numero: String(randInt(1, 9999)),
    };
}

function createUsuario(overrides = {}) {
    const agora = new Date();
    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');
    const segundo = String(agora.getSeconds()).padStart(2, '0');

    const nomeBase = `[Teste QA] Usuario Automacao ${hora}:${minuto}:${segundo}`;
    const email = overrides.email || generateEmail();
    const cpf = overrides.CPF || generateCPF();
    const cnpj = overrides.cnpj || generateCNPJ();
    const telefone = '44999999999';
    const nascimento = overrides.dataNascimento || formatDateBR(20, 12, 1998);
    const endereco = Object.assign({}, generateAddress(), overrides.endereco || {});

    return Object.assign({
        nomeFantasia: nomeBase,
        nomeSocial: nomeBase,
        email: email,
        senha: 'bne123',
        cnpj: cnpj,
        telefone: telefone,
        data_nascimento: nascimento,
        CPF: cpf,
        endereco: {
            CEP: endereco.CEP,
            cidade: endereco.cidade,
            logradouro: endereco.logradouro,
            bairro: endereco.bairro,
            numero: endereco.numero
        }
    }, overrides.root || {});
}

module.exports = { createUsuario };
