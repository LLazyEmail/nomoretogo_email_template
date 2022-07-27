import imageAfterSupportComponent from '../components/imageAfterSupportComponent';

import createComponent from './createComponentUniversal';

/* ******************** DATA START **************************************** */
// Title image after support
const imageAfterSupportComponentParams = '123';

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  // contentTitleText
  const imageAfterSupportComponentRes = createComponent(
    imageAfterSupportComponent,
    imageAfterSupportComponentParams
  );

  result = imageAfterSupportComponentRes;
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
