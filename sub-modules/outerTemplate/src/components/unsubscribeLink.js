import {
    linkComponent,
    spanHeadingBlock
  } from 'nmtg-template-mailerlite-typography';

// import {  
//     unsubscribe
// } from '../config';

// Unsubscribe
const createUnsubscribe = (href) => {
    if (href == '') {
      error.add('No unsubscribe link provided');
    }
  
    const linkParams = {
      attributes: `href="${href}" style="color: #111111; text-decoration: underline;"`,
      content: spanHeadingBlock(`Unsubscribe`), 
    };
    return linkComponent(linkParams);
};

export default createUnsubscribe;