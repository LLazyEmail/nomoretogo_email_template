import {
    linkComponent
} from 'typo';
import { spanHeadingBlock } from 'nmtg-typo';

// Unsubscribe
const createUnsubscribe = (href:string) => {
    // if (href == '') {
    //   error.add('No unsubscribe link provided');
    // }
  
    const linkParams = {
      attributes: `href="${href}" style="color: #111111; text-decoration: underline;"`,
      content: spanHeadingBlock(`Unsubscribe`), 
    };
    return linkComponent(linkParams);
};

export default createUnsubscribe;