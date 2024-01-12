import login from "C:/Users/marin/OneDrive/Desktop/Studies/AutoWEB/8.2_CICD_Jenkins 2/cypress/fixtures/loginDetails.json";

describe("input data testing", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("invalid login email", () => {
    cy.login(login.invalidEmail, login.validPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("invalid password", () => {
    cy.login(login.validEmail, login.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
