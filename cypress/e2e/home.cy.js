import home from "../selectors/home.sel";
import contact from "../selectors/contact.sel";

describe("Home page", () => {
  it("Check company message/vision", () => {
    cy.visit("");
    cy.get(home.globalMessage)
      .should("be.visible")
      .and("contain", "World-class custom software development")
      .and("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Navigate to contacts page and fill in form", () => {
    cy.visit("/contact-us");
    cy.get(contact.contactUsMessage)
      .should("be.visible")
      .and("contain", "Get started");

    cy.get(contact.fullName).type("Cypress Test User");
    cy.get(contact.yourEmail).type("Shaeen.Singh@sovtech.com");
    cy.get(contact.companySize).type("10");
    cy.get(contact.mobileNumber.cellNumber).type("(+44) 20 3998 9611");
    cy.get(contact.yourMessage).type("Cypress Test Script");
  });
});
