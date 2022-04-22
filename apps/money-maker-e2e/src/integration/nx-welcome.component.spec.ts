describe('money-maker', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('testing-nx-nx-welcome').should('exist');
  });
});