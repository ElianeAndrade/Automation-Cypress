🧪 Este projeto tem como objetivo **automatizar testes e validações end-to-end**, garantindo a qualidade e estabilidade das aplicações através de execuções automáticas e validadas em diferentes ambientes.
A automação foi desenvolvida com *Cypress* e suas dependências principais, sendo executável tanto localmente quanto via Azure DevOps Pipeline.


🚀 **Tecnologias Utilizadas**
Cypress
Node.js
Electron (para execução headless ou com interface)
Azure DevOps (integração de pipeline)



🖥️ **Como Rodar Localmente**
1-Clonar o repositório: https://dev.azure.com/AzureDevOps-BNE/BNE/_git/automacao_QA
2-Instalar dependências:
2.1-Antes de rodar os testes, é necessário ter o Node.js instalado.
2.2-Em seguida, instale as dependências do projeto com: npm install
3-Caso algo falhe na instalação, rode novamente npm install e verifique se o Cypress foi instalado corretamente com: npx cypress verify



🧭 **Modos de Execução**
Modo Interativo (com interface)
Para rodar o teste com a interface do Cypress (modo interativo) e escolher o cenário diretamente na interface: npx cypress open --browser electron --env AMBIENTE=hom

Modo Headless (oculto)
Para rodar os testes sem abrir a interface, escolhendo o ambiente: npx cypress run --browser electron --env AMBIENTE=stg

⚙️**Execução na Pipeline (Azure DevOps)**
A automação também pode ser executada diretamente pela pipeline:  https://dev.azure.com/AzureDevOps-BNE/BNE/_build?definitionId=810
Basta clicar em Run pipeline, escolher o ambiente e o cenário desejado, a execução será feita automaticamente.



🌿 **Branch Disponível**
Atualmente o projeto está disponível na branch: eliane_qa



💬 **Observações**
Por enquanto, a automação está em fase de estruturação.
Novos cenários, ambientes e validações serão adicionados conforme evolução do projeto.

*Eliane Andrade - QA*