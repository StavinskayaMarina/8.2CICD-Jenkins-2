import selector from "C:/Users/marin/OneDrive/Desktop/Studies/AutoWEB/8.2_CICD_Jenkins 2/cypress/fixtures/selector";

describe("booking cinema tickets", () => {
  it("checking the correct display of the main page ", () => {
    cy.visit("/");
    cy.get(selector.dayOfWeek).should("have.length", 7);
  });
});