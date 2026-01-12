import './commands'
import 'cypress-xpath'


// ✅ Listener global - ignora erros conhecidos da aplicação
// Ignora erros dentro do origin (erros de aplicaçao - exceções não tratadas)
Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes("Identifier 'windowObjectReference' has already been declared") ||
    err.message.includes("Cannot read properties of null") ||
    err.message.includes("elemAdsPainel is not defined") ||
    err.message.includes("startAutoSlide is not defined") ||
    err.message.includes("ResizeObserver loop completed") ||
    err.message.includes("cross origin") ||
    err.message.includes("null") ||
    err.message.includes("Identifier 'limit' has already been declared") ||
    err.message.includes("Missing initializer in const declaration") ||
    err.message.includes("renderSurvey is not defined") || 
    err.message.includes("Cannot read properties of undefined (reading 'ownerNode')")
  ) {
    return false; // impede que o Cypress quebre o teste
  }

  
});