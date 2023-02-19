import {
  paragraphComponent
} from 'typo';

// Address
const address = () => {
  const addressParams = {
    attributes: `style="margin-top: 0px; margin-bottom: 0px;"`,
    content: 'Dallas,&nbsp;Texas United States',
  };
  return paragraphComponent(addressParams);
};

export default address;
