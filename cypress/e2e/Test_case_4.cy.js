import { SignInLocator } from "../pages/SignInPage";
describe('Color code test automation', () => {
    it('test-1', () => {
        cy.visit("https://secure.login.gov/");
        SignInLocator.sign_in_button().click();
        SignInLocator.email_address_text_field().should('have.css', 'border-color', 'rgb(226, 28, 61)');
        SignInLocator.password_text_field().should('have.css', 'border-color', 'rgb(226, 28, 61)');
    });
    it('test-2', () => {
        cy.visit("https://www.buy.vendidit.com/");
        cy.xpath("//button[normalize-space()='Sign Up']").click();
        cy.xpath("//input[@placeholder='Email']").type("test@gmail.com");
        cy.xpath("//input[@placeholder='First Name']").type("test");
        cy.xpath("//input[@placeholder='Last Name']").type("amin");
        cy.xpath("//button[normalize-space()='Continue']").click();
    });
    it('test-3', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.xpath("//div[@class='inventory_list']//div//div[2]//div//a//div").then((products)=>{
            const productCount=products.length;
            cy.log(productCount);
            Cypress._.each(products, (product) => {
                const productName = product.textContent.trim(); // Get text content
                cy.log(`Product Name: ${productName}`);
            });
            products.each((index,element) => {
                const productName = element.textContent.trim(); // Use `.textContent` directly on the DOM element
                cy.log(productName); // Log the product name in the Cypress test runner
            });
        });
    });
    it('test-4', () => {
        cy.visit('https://automationexercise.com/');
        cy.xpath("//a[normalize-space()='Home']").should('include.text','Home');
        cy.xpath("//a[normalize-space()='Home']").should('have.text',' Home');
        cy.xpath("//a[normalize-space()='Home']").invoke('text').then((text) => {
            expect(text.trim()).to.equal('Home');
        });
    });
    it('test-5', () => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.url().then((url) => {
            cy.log('Page URL is:', url);
        });
        cy.url().should('eq', 'https://www.demoblaze.com/index.html');
        cy.title().then((title) => {
            cy.log('Page Title is:', title);
        });
        cy.title().should('eq', 'STORE');
    });
    it.only('test-6', () => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('a').each(($link) => {
            const linkText = $link.text();
            cy.log(linkText);
        });
        cy.xpath('//*[@id="tbodyid"]//h4/a').should('have.length', 9).then((products) => {
            cy.wrap(products).each((product) => {
              const productName = product.text();
              cy.log(productName);
          });
      });
    });

});