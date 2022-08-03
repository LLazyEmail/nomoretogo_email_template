import { amazonFreshBlock } from 'nmtg-template-mailerlite-outertemplate';

import createComponent from './createComponentUniversal';

/* ******************** DATA START **************************************** */
// TODO can be moved into config later
const imagePath = 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/amazon.png';

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  // contentTitleText
  const imageBlock = createComponent(
    amazonFreshBlock,
    imagePath
  );

  result = imageBlock;
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
