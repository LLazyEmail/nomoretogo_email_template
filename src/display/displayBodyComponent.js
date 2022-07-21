import bodyComponent from '../components/bodyComponent';
import createComponent from './createCopmonentUniversal';

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
} catch (e) {
  console.log(e.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
