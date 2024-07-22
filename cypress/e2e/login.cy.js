describe('Позитивный кейс авторизации', function () {

    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click('');
         cy.wait(3000);
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
    }) 