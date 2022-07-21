import imageAfterSupportComponent from '../components/imageAfterSupportComponent';
import createComponent from './createCopmonentUniversal';

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
} catch (e) {
  console.log(e.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
