import {
  paragraphComponent
} from 'html-typography-tags';

// Description
const description = () => {
  const descriptionParams = {
    attributes: `style="margin-top: 0px; margin-bottom: 0px;"`,
    content:
      'You received this email because you signed up on our website or made a purchase from us.',
  };

  return paragraphComponent(descriptionParams);
};  

export default description;
