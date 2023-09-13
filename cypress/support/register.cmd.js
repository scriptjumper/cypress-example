Cypress.Commands.add("register", () => {
  const apiUrl = Cypress.env("apiUrl");
  const email = `${username}@mailinator.com`;
  const password = Cypress.env("password");

  cy.request({
    url: apiUrl,
    method: "POST",
    body: {
      user: {
        email: email,
        password: password,
      },
    },
  })
    .then((response) => {
      console.log(response);
      expect(response.status).to.eq(200);
      // cy.log("**user created**");
      // cy.log(`**email: ${email}**`);
      // cy.log(`**password: ${password}**`);
    })
    .then(() => ({
      // we need email and username in tests
      email: email,
      username: username,
    }));
});
