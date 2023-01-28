// Component instruction text
import Errors from '../Errors';

const instructionTextMainBlock = (instructionText) => {
  return `<p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">${instructionText}</p>`;
};

export default function (instructionText) {
  const error = new Errors('instructionText');

  if (instructionText == '') {
    error.add('No text');
  }

  return instructionTextMainBlock(instructionText);
}
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
