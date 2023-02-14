// Footer 

import { footerComponent, amazonFreshBlock, supportComponent } from 'outer';

// import { SocialPanelComponent } from 'nmtg-template-mailerlite-inner'; 

import { separatorComponent } from 'nmtg-typo';
// import Factory from './factory';
// import createComponent from './createComponentUniversal';

import { footerData, unsubscribe } from '../config';


const { socialsLinksParams, imagePath, title, params } = footerData;




/* ******************** CREATE CONTENT START ****************************** */
var result = null;
var footerHTMLString = false;


  // first block
  // const amazonFreshBlockHTML = createComponent( amazonFreshBlock, imagePath );
  const amazonFreshBlockHTML = amazonFreshBlock(imagePath);
  
  // second block
  // const factory = new Factory(supportComponent, params);
  // const supportBlock = factory.create();
  const supportBlock = supportComponent(params);

  // third block

  const socialPanel = ' xxxx social panel ';
  // const socialPanel = SocialPanelComponent(socialsLinksParams);
  // const socialPanel = createComponent(SocialPanelComponent, socialsLinksParams) ;

  
  const settings = {
    unsubscribe,
    socialPanel,
     title,
  }



  // footerHTML = 
  // const line = supportBlock +
  // amazonFreshBlock + separatorComponent() + 

  
  // footerHTML(settings) ;


  footerHTMLString = footerComponent(settings);
  // footerHTMLString = createComponent(footerComponent, settings);



  result = 
    supportBlock +
    amazonFreshBlockHTML + 
    separatorComponent() + 
    footerHTMLString;

  // console.log(result);
