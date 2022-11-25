import { footerComponent, amazonFreshBlock, supportComponent  } from 'nmtg-template-mailerlite-outertemplate';
import { SocialPanelComponent } from 'nmtg-template-mailerlite-miscellaneous';

import Factory from './factory';
import createComponent from './createComponentUniversal';

// import socialsLinksParams from './_socialLinksData';

import { socialsLinksParams } from './_footerData';


import { imagePath, title, params } from './_footerData';



// Title
// TODO move title into config
// const title = 'No More To-Go';


// to test updated version of button component

import {     
  buttonComponent2
 } from 'nmtg-template-mailerlite-typography';

//  buttonComponent2({id: '12', href: 'google.com'});


/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {


  const imageBlock = createComponent( amazonFreshBlock, imagePath );


  
  const factory = new Factory(supportComponent, params);
  const supportBlock = factory.create();

  // console.log(supportBlock);
  
  const socialMedia = createComponent(SocialPanelComponent, socialsLinksParams);

  //  console.log(socialMedia);
  
  
  const settings = {
    socialPanel: socialMedia,
    amazonFreshBlock: imageBlock,
    supportBlock: supportBlock
  }


  result = createComponent(footerComponent, settings);

  // console.log(result);


} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
