describe('Негативные кейсы авторизации', function () {
it('Неправильный пароль', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('123');
    cy.get('#loginButton').click('');
    cy.wait(3000);
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Неправильный логин', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('german');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click('');
    cy.wait(3000);
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Валидация на наличие @', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio');
    cy.get('#loginButton').click();
    cy.wait(3000);
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
}) 

it('Чувствительность к регистру', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio');
    cy.get('#loginButton').click();
    cy.wait(3000);
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
}) 
}) 