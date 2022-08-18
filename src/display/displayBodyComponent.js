import { bodyComponent } from 'nmtg-template-mailerlite-outertemplate';

import createComponent from './createComponentUniversal';

import displayContentMainTableWrap from '../display/displayContentMainTableWrap';

import displayContent from '../display/displayContent';
import displayInstruction from '../display/displayInstruction';
/* ******************** DATA START **************************************** */
// Body params

const bodyComponentParams = '123';

// const bodyComponentParams = {

// };

// ${displayContentMainTableWrap}
// ${displayContent}
// ${displayInstruction}

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
export default 'result';
