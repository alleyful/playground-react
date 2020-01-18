describe("First Test", function() {
  it("click buttons", function() {
    cy.visit("http://localhost:3000");

    cy.get("button")
      .contains("SET_COUNT")
      .click();

    cy.get("button")
      .contains("SET_TEXT")
      .click();

    cy.get("button")
      .contains("SET_COLOR")
      .click();

    cy.get("button")
      .contains("TOGGLE_GOOD")
      .click();
  });
});
