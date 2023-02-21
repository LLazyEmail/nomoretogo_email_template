import {
    linkComponent
  } from 'html-typography-tags';
  import { spanHeadingBlock } from 'nmtg-template-mailerlite-typography';
  
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
  