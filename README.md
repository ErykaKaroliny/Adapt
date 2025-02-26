# Adapt

Plano de Testes 

Cenários de Teste 

Cadastro de Usuário 

Critérios de Aceitação: Usuário deve ser cadastrado com sucesso ao preencher todos os campos obrigatórios corretamente. 

Passos:  

Acessar a página de cadastro. 

Preencher os campos obrigatórios. 

Clicar no botão de cadastro. 

Resultado Esperado: Exibição de mensagem de sucesso. 

Resultado Real: Aguardando execução. 

Login 

Critérios de Aceitação: Usuário deve conseguir acessar a conta com credenciais corretas. 

Passos:  

Acessar a página de login. 

Inserir email e senha válidos. 

Clicar no botão de login. 

Resultado Esperado: Usuário logado e redirecionado para o dashboard. 

Resultado Real: Aguardando execução. 

Preenchimento de Formulário 

Critérios de Aceitação: O formulário deve ser enviado com sucesso ao preencher todos os campos. 

Passos:  

Acessar a página do formulário. 

Preencher os campos obrigatórios. 

Clicar no botão de envio. 

Resultado Esperado: Exibição de mensagem de confirmação. 

Resultado Real: Aguardando execução. 

Validação de Campos Obrigatórios 

Critérios de Aceitação: Deve exibir mensagens de erro ao tentar enviar o formulário sem preencher os campos obrigatórios. 

Passos:  

Acessar a página do formulário. 

Clicar no botão de envio sem preencher os campos. 

Resultado Esperado: Exibição de mensagens de erro. 

Resultado Real: Aguardando execução. 

Logout 

Critérios de Aceitação: Usuário deve conseguir sair da conta com sucesso. 

Passos:  

Estar logado no sistema. 

Clicar no botão de logout. 

Resultado Esperado: Redirecionamento para a tela de login. 

Resultado Real: Aguardando execução. 

 

Relatório de Bugs 

Título: Erro ao submeter formulário sem preencher campos obrigatórios  

Descrição: O sistema não exibe mensagem de erro ao tentar submeter o formulário sem preencher os campos obrigatórios. 

Passos para reprodução:  

Acessar a página do formulário. 

Clicar no botão de envio sem preencher os campos. 

Severidade: Alto 

Evidências: Screenshot anexado. 

 

Proposta de Melhoria Contínua na Área de QA 

Ferramentas para otimização 

Introdução de testes automatizados usando Cypress. 

Uso de relatórios detalhados com Allure Report. 

Processos para eficiência 

Implementação de CI/CD para rodar testes automaticamente em cada merge. 

Revisão de código e testes automatizados antes do deploy. 

Métricas e Indicadores 

Taxa de sucesso dos testes automatizados: Mede a estabilidade do sistema. 

Cobertura de testes: Garante que as funcionalidades críticas são testadas. 

Automação 

Automatização de testes regressivos para evitar retrabalho manual. 

Execução de testes em múltiplos navegadores e dispositivos. 

Boas Práticas 

Implementação de testes unitários, integração e E2E. 

Revisão contínua das estratégias de QA. 

 

Testes Automatizados 

Script de Teste com Cypress 

describe('Teste de Formulário', () => { 
    it('Preenche e envia o formulário', () => { 
        cy.visit('URL_DO_SEU_SITE'); // 🔹 Substitua pela URL real do formulário 
 
        // Preenchendo o formulário 
        cy.get('#form-field-name').type('QA'); 
        cy.get('#form-field-email').type('teste@gmail.com'); 
        cy.get('#form-field-message').type('QA LTDA'); 
        cy.get('#form-field-field_f4f7f90').click(); 
        cy.get('#form-field-field_195975d').type('48991647943'); 
        cy.get('#form-field-field_98bbe7d').type('teste de Adapt'); 
 
        // Enviar o formulário 
        cy.get('.elementor-field-type-submit > .elementor-button').click(); 
 
        // Verificar a mensagem de sucesso 
        cy.contains('Inscrição realizada com sucesso! Em breve nosso time entrará em contato.') 
          .should('be.visible'); 
    }); 
}); 
  

Como Executar os Testes 

Instale o Cypress: npm install cypress --save-dev 
  

Abra o Cypress: npx cypress open 
  

Execute os testes na interface do Cypress ou via terminal: npx cypress run 
  

Envio para GitHub/GitLab 

Criar um repositório no GitHub/GitLab. 

Adicionar os arquivos do projeto: git init 
git add . 
git commit -m "Adicionando testes automatizados" 
git branch -M main 
git remote add origin URL_DO_REPOSITORIO 
git push -u origin main 
