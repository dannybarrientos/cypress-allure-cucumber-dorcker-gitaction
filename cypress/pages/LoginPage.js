class LoginPage {
  elements = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () =>   cy.get('#log-in'),
    redirectUrl: () => cy.get('#log-in')
  };

  typeUsername(username) {
    this.elements.usernameInput().click();
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().click();
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
