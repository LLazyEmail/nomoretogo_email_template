// Create footer component
import {
  paragraphComponent
} from 'typo';


import Errors from './Errors';
const error = new Errors('footerComponent');


import createUnsubscribe from './footer/unsubscribeLink';

import address from 'address';
import description from 'description';
import footerHTML from 'section';
import 


const footerComponent = (params:any) => {

  const { 
    unsubscribe,
    socialPanel, title 
  } = params;

  const settings = {
    address: address(),
    description: description(),
    unsubscribeLink: createUnsubscribe(unsubscribe), // TODO think about moving unsubscribe away, because right now we have strange logic
    socialPanel,
    title,
  }

  // supportBlock +
              // amazonFreshBlock + separatorComponent() + 
  // TODO update it later
  const line = footerHTML(settings) ;


  return line;
  

};

export default footerComponent;
