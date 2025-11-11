describe('Login Page QA Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081'); // login page
  });

  it('Page loads correctly', () => {
    cy.get('input[placeholder="Username"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains('Login').should('be.visible');
  });

  it('Empty login shows error', () => {
    cy.get('button').contains('Login').click();
    cy.contains('Invalid username or password').should('be.visible');
  });

  it('Invalid login shows error', () => {
    cy.get('input[placeholder="Username"]').type('wrongUser');
    cy.get('input[placeholder="Password"]').type('wrongPass');
    cy.get('button').contains('Login').click();
    cy.contains('Invalid username or password').should('be.visible');
  });

  it('Valid login works', () => {
    cy.get('input[placeholder="Username"]').type('admin');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/dashboard');
  });
});
