import { bodyComponent } from 'nmtg-template-mailerlite-outertemplate';

import createComponent from './createComponentUniversal';

import displayContentMainTableWrap from './displayContentMainTableWrap';
import displayContent from './displayContent';
import displayInstruction from './displayInstruction';

/* ******************** DATA START **************************************** */
// Body params



const bodyComponentParams = `
${displayContentMainTableWrap}
${displayContent}
${displayInstruction}
`;


/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  // contentTitleText
  const bodyComponentRes = createComponent(bodyComponent, bodyComponentParams);

  result = bodyComponentRes;
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
