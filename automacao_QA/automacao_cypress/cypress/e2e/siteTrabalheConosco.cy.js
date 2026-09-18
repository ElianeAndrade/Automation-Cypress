import loginPage from "../pages/loginPage";
import TrabalheConosco from "../pages/siteTrabalheConoscoPage";
import users from "../fixtures/users.json";

describe('Site Trabalhe Conosco', () => {
    it('Deve verificar minha página Trabalhe Conosco', () => {
        TrabalheConosco.VerMinhaPaginaTrabalheConosco();
    });

    it('Deve clicar no módulo Trabalhe Conosco', () => {
        TrabalheConosco.SiteTrabalheConosco();
    });

    it('Deve validar os módulos de customização do Trabalhe Conosco', () => {
        TrabalheConosco.ValidaModulosCustomização();
    });



})
