context("Actions", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("input test", () => {
    cy.get(".todoInput")
      .type("write todos")
      .should("have.value", "write todos");

    cy.get(".todoSubmit")
      .click()
      .get(".TodoItem")
      .contains("write todos");
  });
});
