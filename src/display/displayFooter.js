import { footerComponent, amazonFreshBlock, supportComponent  } from 'nmtg-template-mailerlite-outertemplate';
import { SocialPanelComponent } from 'nmtg-template-mailerlite-miscellaneous';
import { separatorComponent } from 'nmtg-template-mailerlite-typography';
import Factory from './factory';
import createComponent from './createComponentUniversal';

import { footerData, unsubscribe } from '../config';


const { socialsLinksParams, imagePath, title, params } = footerData;






// to test updated version of button component

// import {     
//   buttonComponent2
//  } from 'nmtg-template-mailerlite-typography';

//  buttonComponent2({id: '12', href: 'google.com'});


/* ******************** CREATE CONTENT START ****************************** */
var result = null;
var footerHTMLString = false;
try {

  // first block
  const amazonFreshBlockHTML = createComponent( amazonFreshBlock, imagePath );
  
  // second block
  const factory = new Factory(supportComponent, params);
  const supportBlock = factory.create();

  // console.log(supportBlock);

  // third block
  const socialPanel = createComponent(SocialPanelComponent, socialsLinksParams) ;

   console.log(socialPanel);
  
  
  const settings = {
    unsubscribe,
    socialPanel,


    // amazonFreshBlock: imageBlock,
    // supportBlock: supportBlock,

     title,
  }



  // footerHTML = 
  // const line = supportBlock +
  // amazonFreshBlock + separatorComponent() + 

  
  // footerHTML(settings) ;

  footerHTMLString = createComponent(footerComponent, settings);



  result = 
    supportBlock +
    amazonFreshBlockHTML + 
    separatorComponent() + 
    footerHTMLString;

  // console.log(result);


} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
