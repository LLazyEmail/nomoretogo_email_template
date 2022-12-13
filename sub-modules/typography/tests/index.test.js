import { linkComponent, imgWrapper } from '../src/components/image';

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


    const imageLink = imgWrapper(data);

    console.log(imageLink);

  });
});


const buttonComponent2 = require('../src/components/button2');
// import { buttonComponent2 } from 'nmtg-template-mailerlite-typography';

describe('testing complex links', () => {
  test('rendering head component', () => {
    console.log(buttonComponent2);
    //buttonComponent2({id: '12', href: 'google.com'});
    //         const string1 = printHead();
    //   //       // console.log(string);
    //         expect(printHead()).toBeDefined();
    //         writingFile(string1);
  });
});
