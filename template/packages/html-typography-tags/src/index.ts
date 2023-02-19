// export * from './lib/html-typography-tags';




import buttonComponent from './components/button';

import divComponent from './components/div';


//  import heading from './components/heading-nmtg';

//  import headingComponent from './components/heading';

//  import headingOneComponent from './components/headingOne';

import imageComponent from './components/image';

import imageLink from './components/imageLink';

import italicComponent from './components/italic';

import linkComponent from './components/link';

import listComponent from './components/list';
import listItemComponent from './components/listItem';

import paragraphComponent from './components/paragraph';

import strongComponent from './components/strong';

///////////////////////////////
// I'm adding my tests here, because i dont know how to organize it right now
//////////////////////////////


const attributes = {
    style: "width: 600px"
  }
  
const content = "Bla bla bla";
  
const config = {id: '12', href: 'https://google.com', text: 'Bla bla bla'};
  
const data = {
    id: 'imageBlock-26',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg',
    //------
    title: 'Chipotle Cream Skillet Chicken',
    text: 'over Rice and Snap Peas',
    width: "600px"
};


const linkHTML = linkComponent(config);

const buttonHTML = buttonComponent(config);

const strongHTML = strongComponent({attributes, content});

const imageLinkHTML = imageLink(data);

console.log(linkHTML);

console.log(buttonHTML);

console.log(strongHTML);

console.log(imageLinkHTML);




// End of tests
////


export {
    buttonComponent,
    divComponent,
    imageComponent,
    imageLink,
    italicComponent,
    linkComponent,
    listComponent,
    listItemComponent,
    paragraphComponent,
    strongComponent,
}