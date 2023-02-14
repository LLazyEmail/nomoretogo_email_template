// Component instruction text
// import Errors from '../Errors';

import {
  // strongComponent,
  paragraphComponent,
} from 'typo';


// replacing 
// return `<p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">${text}</p>`;
const createText = (text) => {
  
  const content = { content: text };

  const config = {
    attributes: `style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"`,
    content,
  };
  return paragraphComponent(config);

};

export default createText;
