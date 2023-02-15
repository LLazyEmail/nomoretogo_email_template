// Footer 
import { 
  footerComponent,  
  SocialPanelComponent
} from 'outer';

import supportHTMLString from '../content/support-amazon-fresh'; 

import { footerData, unsubscribe } from '../config';

const { 
  socialsLinksParams,  
  title, 
  params 
} = footerData;



/* ******************** CREATE CONTENT START ****************************** */
var result = null;

// var footerHTMLString = false;


  // third block
  // const socialPanel = ' xxxx social panel ';
  const socialPanel = SocialPanelComponent(socialsLinksParams);

  // const socialPanel = createComponent(SocialPanelComponent, socialsLinksParams) ;

  
  const settings = {
    unsubscribe,
    socialPanel,
    title,
  }


  // const line =  footerHTML(settings) ;

  const footerHTMLString = footerComponent(settings);
  // footerHTMLString = createComponent(footerComponent, settings);

  console.log(footerHTMLString);

  result = 

    supportHTMLString + 
    footerHTMLString;

  // console.log(result);


  export default footerHTMLString;