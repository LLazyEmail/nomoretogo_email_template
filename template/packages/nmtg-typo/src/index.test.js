// import { linkComponent, imgWrapper } from '../src/components/image';

import { imageLink, buttonComponent } from 'typo';

// const { imageLink, buttonComponent } = require('html-typography-tags');

const data = {
  id: 'imageBlock-26',
  href: 'https://www.nomoretogo.com/weekly-menu/',
  src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg',
  //------
  title: 'Chipotle Cream Skillet Chicken',
  text: 'over Rice and Snap Peas',
};


describe('testing image with a link', () => {
  test('rendering imgWrapper component', () => {


    const html = imageLink(data);



    console.log(imageLink);

  });
});

// import { buttonComponent } from 'html-typography-tags';
// const buttonCom

// const buttonComponent2 = require('../src/components/button2');
// import { buttonComponent2 } from 'nmtg-template-mailerlite-typography';

describe('testing complex links', () => {
  test('rendering btn component', () => {
    
    buttonComponent({id: '12', href: 'google.com'});

    console.log(buttonComponent);

    //         const string1 = printHead();
    //   //       // console.log(string);
    //         expect(printHead()).toBeDefined();
    //         writingFile(string1);
  });
});
