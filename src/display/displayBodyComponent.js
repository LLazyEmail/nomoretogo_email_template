import { bodyComponent } from 'nmtg-template-mailerlite-outertemplate'

import createComponent from './createComponentUniversal';

// TODO for some reason body i emplty, while display main is full of stuff

/* ******************** DATA START **************************************** */
// Body params
const bodyComponentParams = '123';

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
