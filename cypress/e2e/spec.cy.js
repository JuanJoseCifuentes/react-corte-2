describe('Prueba E2E de React App', () => {
  it('Carga la página principal, busca y encuentra pikachu', () => {
    // Visita la página de la aplicación
    cy.visit('http://localhost:3000'); // Cambia la URL según la de tu aplicación

    // Verifica que el título de la página sea correcto
    cy.get('.name').should('contain', 'Bulbasaur');

    // Realiza una acción, por ejemplo, hacer clic en un botón
    cy.get('SearchBox').click();

    // Verifica que la acción tuvo el resultado esperado
    cy.get('h1').should('contain', '¡Hiciste clic en el botón!');
  });
});
