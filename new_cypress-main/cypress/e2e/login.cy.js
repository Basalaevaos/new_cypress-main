describe('Проверка логина и пароля', function () {
    
  it('Валидный лонин и пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#loginButton').should('be.disabled');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').should('be.enabled');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('be.visible');
      cy.get('#messageHeader').contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton >.exitIcon').should('be.visible');
       })

       it('Логига восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').should('be.visible');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();

         })

  it('Валидный лонин, неверный пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#loginButton').should('be.disabled');
      cy.get('#pass').type('iLoveqastudio1111');
      cy.get('#loginButton').should('be.enabled');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('be.visible');
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton >.exitIcon').should('be.visible');

}) 

it('Не валидный лонин, валидный пароль', function () {
  cy.visit('https://login.qa.studio/');
  cy.get('#mail').type('1german@dolnikov.ru');
  cy.get('#loginButton').should('be.disabled');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').should('be.enabled');
  cy.get('#loginButton').click();
  cy.get('#messageHeader').should('be.visible');
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
  cy.get('#exitMessageButton >.exitIcon').should('be.visible');
})

  it('Негативный валидация логина (без@), валидный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton >.exitIcon').should('be.visible');

  })

  it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton >.exitIcon').should('be.visible');
     })
   

}) 

