describe('money-maker', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('testing-nx-root').should('exist');
  });
});