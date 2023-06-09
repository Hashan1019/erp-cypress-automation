// <reference types="Cypress" />
// <reference types = '@cypress/xpath'/>

//require('cypress-downloadfile/lib/downloadFileCommand')

//custom command to click on links
Cypress.Commands.add('clickLink', (label) => {
  cy.contains(label).click();
})

//custom command to click on links by xpath
Cypress.Commands.add('clickLinkByXpath', (label) => {
  cy.xpath(label).click();
})

//custom command to verify the links
Cypress.Commands.add('verifyLink', (label) => {
  cy.contains(label).should("be.visible");;
})

//custom commands for clicking  on links using labels
Cypress.Commands.add('clickonLink', (label) => {
  cy.get('a').contains(label).click();
})

//custom commands for clicking  on links using labels
Cypress.Commands.add('clickonLink', (label) => {
  cy.get('a').contains(label).click({
    force: true,
    preventDefault: true

  });

})


//custom commands for clicking on elements by selector
Cypress.Commands.add('clickOnElementBySelector', (selector) => {
  cy.get(selector).click();
})

Cypress.Commands.add('clickonLink', (label) => {
  cy.get('a').contains(label).click({
    force: true,
    preventDefault: true

  });

})

//custom command for select Items by value using labels
Cypress.Commands.add('selectItem', (label) => {
  cy.contains(label)
    .should("be.visible")
    .click({ force: true })
});

//custom command for select Items by value using labels
Cypress.Commands.add('selectItemByIndex', (title, index) => {
  cy.get(`a[title="${title}"]`)
    .eq(index)
    .click({ force: true })
});

//custom commands to verify href links
Cypress.Commands.add('verifyHrefLinks', (href) => {
  cy.contains(href).should("be.visible");
});

//cypress commands to verify and click on images

Cypress.Commands.add('verifyAndClickImage', (imageSelector, altText) => {
  cy.get(imageSelector).should('have.attr', 'alt', altText).click()
})

Cypress.Commands.add('verifyImage', (label, srcUrl) => {
  cy.get(label).should('have.attr', 'src', srcUrl)
})

Cypress.Commands.add('verifyAndClickImageByIndex', (imageSelector, index) => {
  cy.xpath(imageSelector).eq(index).click()
})


//custom command to click on button
Cypress.Commands.add('selectButtons', (buttonTexts) => {
  cy.get('button').contains(buttonTexts).click({ multiple: true })
})

//custom command to verify on button text
Cypress.Commands.add('verifyButtonText', (buttonTexts) => {
  cy.get('button').contains(buttonTexts).should("be.visible");
})

//custom command  to verify text values
Cypress.Commands.add('verifyTextFields', (textFields) => {
  textFields.forEach((textField) => {
    cy.get(textField.selector).should('have.value', textField.value)
  })
})

//custom command to verify drop down by values

Cypress.Commands.add('selectDropdown', (dropdownSelector, optionText) => {
  cy.get(dropdownSelector).select(optionText)
})


Cypress.Commands.add('selectDropdownByXpath', (dropdownSelector, optionText) => {
  cy.xpath(dropdownSelector).select(optionText)

})

//custom command to verify drop down by index
Cypress.Commands.add('selectDropdownByIndex', (dropdownSelector, index) => {
  cy.xpath(dropdownSelector).select(index)

})

//custom command to verify links and link text 
Cypress.Commands.add('verifyLinkInDOM', (linkText, linkUrl) => {
  cy.get('a').contains(linkText).should('have.attr', 'href', linkUrl)
})

// custom commands to verify and click on radio buttons
Cypress.Commands.add('verifyAndClickRadioButton', (radioButtonSelector, value) => {
  cy.get(radioButtonSelector).should('have.value', value).click()
})

//custom command to click on input fields
Cypress.Commands.add('clickOnInputField', (inputFieldSelector) => {
  cy.get(inputFieldSelector).click()
})

//custom command to click on check boxes
Cypress.Commands.add('clickOnCheckBox', (checkBoxSelector) => {
  cy.xpath(checkBoxSelector)
    .should("be.visible")
    .click()
})

//custom command to click on check box by index
Cypress.Commands.add('clickOnCheckBoxByIndex', (index) => {
  cy.get('input[type="checkbox"]')
    .eq(index)
    .click({ force: true })


  // // Verify that the checkbox is checked
  // cy.get('#my-checkbox')
  //   .should('be.checked');


})

//custom command to iterate and find the elements using css selectors
Cypress.Commands.add('findElements', (elementSelector, callback) => {
  cy.get(elementSelector).each(callback) // callback is a function that is called for each element
})

//custom command to search items from the search bar
Cypress.Commands.add('searchFromSearchBar', (searchBarSelector, searchText) => {
  cy.get(searchBarSelector).type(searchText)
  cy.wait(1000)
  cy.xpath("//div[@class='main-search']/form").submit();
})


//custom command for select category by value using labels
Cypress.Commands.add('selectCategory', (title) => {
  cy.get(`a[title="${title}"]`).click({ force: true })
});

//custom command for select sub category by value using labels
Cypress.Commands.add('selectSubCategory', (label) => {
  cy.get('.navbar-nav mr-auto > li').contains(label)
    .should("be.visible")
    .click({ multiple: true })
});

//custom command to click on Item by item name
Cypress.Commands.add('clickOnItem', (label) => {
  cy.contains(label).contains('a')
    .first()
    .click()
});

//custom command to click on first radio button
Cypress.Commands.add('clickOnFirstRadio', () => {
  cy.get('[type="radio"]').first().check()
});

//custom command to click on radio button
Cypress.Commands.add('clickOnRadio', () => {
  cy.get('[type="radio"]').check()
});

//custom command to click on  button
Cypress.Commands.add('clickOnButton', (label) => {
  cy.get('button').contains(label)
    .click();
});

//custom command to scroll to View
Cypress.Commands.add('scrollDown', () => {
  cy.scrollTo(0, 500)
});

Cypress.Commands.add('mouseOver', (label) => {
  cy.contains(label)
    .invoke('show')
    .should('be.visible')
    .trigger('mouseover')

});

//coustom command to send value to text box using xpath
Cypress.Commands.add('enterValue', (xpathSelector, enterText) => {
  cy.xpath(xpathSelector).type(enterText)

})

//coustom command to clear text box value and enter using xpath
Cypress.Commands.add('typeValue', (xpathSelectors, enterValue) => {
  cy.xpath(xpathSelectors).clear().type(enterValue).type('{enter}')
})

// custom commands to verify textbox value using xpath
Cypress.Commands.add('verifyTextBoxValue', (XpathSelectors, value) => {
  cy.xpath(XpathSelectors).should('have.value', value)
})

// custom commands to verify text value using xpath
Cypress.Commands.add('verifyTextValue', (XpathSelectors) => {
  cy.xpath(XpathSelectors).should('be.visible')
})

//custom commands to verify equle button text value
Cypress.Commands.add('VerifyButtonTextValue', (XpathSelectors, buttonTextVlaue) => {
  cy.xpath(XpathSelectors).should(($button) => {
    expect($button.text()).to.equal(buttonTextVlaue)
  })
})

Cypress.Commands.add('scrollDown', (x, y) => {
  cy.scrollTo(x, y)
});

//custom command to scroll up to View
Cypress.Commands.add('scrollInToView', (selector) => {
  cy.xpath(selector).scrollIntoView();

});


Cypress.Commands.add('mouseOver', (label) => {
  cy.contains("a", label).realHover('mouse')
  /*cy.contains(label)
  .invoke('show')
  .should('be.visible')
  .trigger('mouseover')*/

});

Cypress.Commands.add('verifyLabel', (attribute, label) => {
  cy.contains(attribute, label).should("be.visible")
})

Cypress.Commands.add('verifyNavigationBar', (label) => {
  cy.get(label).should("be.visible")
})

//custom command to enter value in text field
Cypress.Commands.add('enterText', (selector, text) => {
  cy.get(selector).type(text)

})

//custom command to enter value in text field using xpath
Cypress.Commands.add('enterTextByXpath', (selector, text) => {
  cy.xpath(selector).type(text)

})
Cypress.Commands.add('clickOnBreadcrumb', (label) => {
  cy.get('#category-menu').click({
    force: true,
    preventDefault: true
  })
});


//command to Login
Cypress.Commands.add('login', (fileName, username = '', password = '') => {
  cy.get('.MuiContainer-root').first().within((form) => {
    cy.fixture(fileName).then(user => {
      let str = [];
      str[0] = user.username.toString();
      str[1] = user.password.toString();
      let i = 0;
      if (username === '' && password === '') {
        cy.get('input').
          each(($el, index, $list) => {
            if ($el.is(":visible") && i <= 1) {
              cy.wrap($el)
                .type(str[i]);
              i++;
            }
          });
      } else {
        cy.get(username)
          .type(str[0]);
        cy.get(password)
          .type(str[1]);
      }

    });



  });
});


/*Cypress.Commands.add('logout',(label)=> {
  cy.contains(label).should("be.visible")
  cy.contains(label).click({force: true})
});*/



Cypress.Commands.add('verifyTopicsAndScroll', (label) => {
  cy.contains(label).should('be.visible')
    .wait(1000).scrollIntoView();

})

Cypress.Commands.add('verifyTopics', (label) => {
  cy.contains(label).wait(1000).should('be.visible');

})

//verify error messagetext fields values
Cypress.Commands.add('verifyTextErrorMessage', (label, errorMessage) => {
  cy.get(label).should('contain', errorMessage).should('be.visible');

})


///hashan
//custom commands to verify and click on using images alt
Cypress.Commands.add('verifyImageByAlt', (imageSelector, altText) => {
  cy.get(imageSelector).should('have.attr', 'alt', altText);
})

//custom command to click on button by xpath
Cypress.Commands.add('clickOnButtonsByXpath', (xpathSelector) => {
  cy.xpath(xpathSelector).click({ force: true });

})

//custom command to verify Breadcrum
Cypress.Commands.add('verifyBreadcrumb', (breadcrumbSelector, expectedBreadcrumb) => {
  cy.get(breadcrumbSelector).should('contain', expectedBreadcrumb);

})

//custom command to buttonclick
Cypress.Commands.add('ButtonClick', (attribute) => {
  cy.get(attribute).should('be.visible').click();

})

//custom command to verify label and scroll into label
Cypress.Commands.add('verifyLabelAndScroll', (attribute, label) => {
  cy.contains(attribute, label).should("be.visible")
    .wait(2000).scrollIntoView();

})

//custom command to verify and click the links
Cypress.Commands.add('verifyAndClickLink', (label) => {
  cy.contains(label).should("be.visible").click();

})

//custom command to scrollup to View
Cypress.Commands.add('scrollUp', (label) => {
  cy.get(label).wait(1000).click({ force: true });

})

//custom command to verify Footer
Cypress.Commands.add('verifyFooter', (label) => {
  cy.get(label).should('be.visible').scrollIntoView();

})

//custom command to search items suggestion
Cypress.Commands.add('addedTextEnter', (selector, searchText) => {
  cy.get(selector).contains(searchText).click()

})

//custom command to search items clean
Cypress.Commands.add('textClean', (element, text) => {
  cy.get(element).should('have.value', text).clear();

})

//cypress commands to verify and click on images by xpath
Cypress.Commands.add('verifyAndClickImageByXpath', (imageSelector) => {
  cy.xpath(imageSelector).should('be.visible').click()
})

//cypress commands to verify urls
Cypress.Commands.add('verifyUrls', (expectedUrl) => {
  cy.url().should('eq', expectedUrl);
})


//cypress commands to verify elements
Cypress.Commands.add('verifyElementsByXpath', (selector) => {
  cy.xpath(selector).should('be.visible');
})


//cypress command to verify compareExcelFiles conent
Cypress.Commands.add('verifyCompareExcelFiles', (downloadPath, expectedFilePath) => {
  // Read the downloaded file as base64
  cy.readFile(downloadPath, 'base64').then((downloadedFile) => {
    // Read the expected file as base64
    cy.readFile(expectedFilePath, 'base64').then((expectedFile) => {
      // Compare the two files and assert that they are equal
      expect(downloadedFile).to.equal(expectedFile)
    })
  })
})

//cypress command to verify file conent
Cypress.Commands.add('verifyfileUpload', (filePath) => {
  cy.get('input[type="file"]').selectFile(filePath, { force: true })
})

//cypress commands to verify Breadcrumb path
Cypress.Commands.add('verifyBreadcrumbText', (breadcrumbWrapper, breadcrumbHomeImg, expectedTexts,) => {
  cy.get(breadcrumbWrapper)
    .should('exist')
    .should('have.length', 1)
    .each(($li) => {
      cy.xpath(breadcrumbHomeImg).should('be.visible');
      expectedTexts.forEach((text) => {
        cy.wrap($li).should('contain.text', text);
      });
    });

});

//custom command to verify on radio button is checked
Cypress.Commands.add('verifyRadioIsChecked', (selector) => {
  cy.get(selector).should('be.checked');
});

//custom command to verify selected value in a dropdown
Cypress.Commands.add('verifySelectedValue', (selector, value) => {
  cy.get(selector).should('have.value', value);
});

//custom command to verify selected value in a dropdown by xpath
Cypress.Commands.add('verifySelectedValueByXpath', (selector, value) => {
  cy.xpath(selector).should('have.value', value);
});

//cypress commands to verify product information box
Cypress.Commands.add('verifyProductInfo', (imageSelector) => {
  cy.wait(4000);
  cy.xpath(imageSelector).should("be.visible");
})

//cypress commands to verify and click ul indise li path
Cypress.Commands.add('verifyUlInsideLi', (mainText, expectedUl, expectedList,) => {
  cy.get(mainText)
    .click()
    .should('exist')
    .should('have.length', 1)
    .each(($li) => {
      cy.xpath(expectedUl).should('be.visible');
      expectedList.forEach((text) => {
        cy.wrap($li).should('contain.text', text);
      });
    });
});

Cypress.Commands.add('verifyMessage', (element, text) => {
  cy.get(element)
    .should('have.value', text)
});


Cypress.Commands.add('enterNumericInputField', (fixtureName, selector, fixtureData) => {
  cy.fixture(fixtureName).then((data) => {
    cy.xpath(selector).clear().type(data[fixtureData]);
  });
});

