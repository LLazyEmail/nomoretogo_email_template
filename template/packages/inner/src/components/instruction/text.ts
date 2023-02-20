import {
  // strongComponent,
  paragraphComponent,
} from 'html-typography-tags';


// replacing 
// return `<p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">${text}</p>`;
const createText = (text:string) => {
  
  const content = { content: text };

  const config = {
    attributes: `style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"`,
    content,
  };
  return paragraphComponent(config);

};

export default createText;
