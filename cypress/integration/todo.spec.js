describe('Testes de Integração - To-Do List', () => {

    it('Deve adicionar uma tarefa na lista ao clicar em adicionar', () => {
      cy.visit('index.html');
      cy.get('#task-input').type('Nova Tarefa');
      cy.get('button').click();  // Clica no botão "Adicionar"
      cy.get('ul li').should('have.length', 1);  // Verifica que há uma tarefa
      cy.get('ul li').first().should('contain', 'Nova Tarefa');  // Verifica se a tarefa adicionada está visível
    });
  
    it('Deve remover uma tarefa da lista ao clicar no botão "X"', () => {
      cy.visit('index.html');
      cy.get('#task-input').type('Tarefa a Remover');
      cy.get('button').click();  // Adiciona a tarefa
      cy.get('ul li').first().find('.remove-task').click();  // Clica no botão de remoção
      cy.get('ul li').should('have.length', 0);  // A lista de tarefas deve estar vazia
    });
  
    it('Deve persistir a tarefa no LocalStorage após recarregar a página', () => {
      cy.visit('index.html');
      cy.get('#task-input').type('Tarefa Persistente');
      cy.get('button').click();  // Adiciona a tarefa
      cy.reload();  // Recarrega a página
      cy.get('ul li').should('have.length', 1);  // Verifica que a tarefa persiste
      cy.get('ul li').first().should('contain', 'Tarefa Persistente');  // Verifica o conteúdo da tarefa
    });
  
  });
  