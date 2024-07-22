describe('Покупка аватара', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('input[type="email"]').type('USER_LOGIN');
         cy.get('input[type="password"]').type('USER_PASSWORD');
         cy.get('button[type="submit"]').click();
         cy.wait(1000);
         cy.get('.header__btns > :nth-child(4)').click();
         cy.get('.available > button').first().click();
         cy.get('.credit').type('4111 1111 1111 1111');
         cy.get('.k_input_date').type('1135');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_name').type('BONES SHKAF');  
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
     })
 }) 