describe('To-Do List', () => {
    it('Deve adicionar uma tarefa', () => {
      cy.visit('index.html');
      cy.get('#task-input').type('Nova tarefa');
      cy.get('button').click();
      cy.get('ul li').should('have.length', 1);
      cy.get('ul li').first().should('contain', 'Nova tarefa');
    });
  });

  it('Deve remover uma tarefa', () => {
    cy.visit('index.html');
    cy.get('#task-input').type('Tarefa para remover');
    cy.get('button').click();
    cy.get('ul li').first().find('button').click();
    cy.get('ul li').should('have.length', 0);
  });

//   arrumar para o front depois