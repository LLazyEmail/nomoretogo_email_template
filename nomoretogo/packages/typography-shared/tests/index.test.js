// import { linkComponent, imgWrapper } from '../src/components/image';

import buttonComponent from '../src/components/button';

// import strongComponent from '../src/components/strong';

import strongComponent from '../src/components/strong';
//jest.mock('../src/components/strong') ;
// const buttonComponent = require('../src/components/button')

const attributes = {
  style: "width: 600px"
}

const content = "Bla bla bla";

const config = {id: '12', href: 'google.com', text: 'Bla bla bla'};

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


    // const imageLink = imgWrapper(data);

    // console.log(imageLink);

  });
});




describe('testing complex links', () => {
  test('rendering Button2 component', () => {


    // console.log(buttonComponent2);
    // console.log(buttonComponent(config))


    console.log( strongComponent({ attributes, content }) );

    // console.log( linkComponent({id: '12', href: 'google.com'}) );
    //buttonComponent2({id: '12', href: 'google.com'});
    //         const string1 = printHead();
    //   //       // console.log(string);
    //         expect(printHead()).toBeDefined();
    //         writingFile(string1);
  });
});
