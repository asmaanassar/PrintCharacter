/// <reference types ="Cypress"/>
describe('as Homework test', () => {
    it('calculate the total price for items have one price for mens-tops-hodies and jacket gear - bags', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("a[href*='softwaretestingboard.com/']").as('firstlink')
        cy.get('@firstlink').contains("Men").click()
        cy.get('.item').as('secondlink')
        cy.get('@secondlink').contains("Hoodies & Sweatshirts").click()
        cy.get(":nth-child(5) > .field > .control > #limiter").select("36");
        cy.get('.product-item-info').as("items")
        /*first selution for print the first three char of item name_*/
        // cy.get('@items').find('.product-item-link').as('itemName')
        // cy.get('@itemName').each((element,index) => {
        //         const ProductName = element.text().trim();
        //         const firstThreeChars = ProductName.slice(0, 3);
        //         cy.log((index+1)+"the first three letter "+firstThreeChars);  
        // })

        /*second selution for print the first three char of item name_*/
    //    cy.get('@items').find('.product-item-link').invoke('text').then((productItemName) => {
    //         const productNameText = productItemName.split(/\r?\n|\r/);
    //         for (let i = 0; i < productNameText.length; i++) {
    //           const productName = productNameText[i].trim();
    //           if (productName.length > 0) {
    //             const FirstthreeLetter = productName.slice(0, 3);
    //             cy.log((i + 1) + "First three letter of item name: " + FirstthreeLetter);
    //           }
    //         }
    //       });
    /*thierd seluotion for print the first three char of item name_*/

    cy.get('@items').find('.product-item-link').then((ProductN) => {
            const productNames = ProductN.map((index, element) => {
              return Cypress.$(element).text().trim();
            }).get();
            
            for (let index = 0; index < productNames.length; index++) {
              const productName = productNames[index];
              const truncatedName = productName.substring(0, 3);
              cy.log((index + 1) + "First three letter of item name: " + truncatedName);
            }
          });

    })
    });
 