import footerComponent from '../domain/outer/footerComponent';
import createComponent from './createCopmonentUniversal';

/* ******************** DATA START **************************************** */
// Footer params
const socialsParams = [
  { href: 123, src: 123 },
  { href: 123, src: 123 },
  { href: '123', src: '' },
];

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  const footerComponentRes = createComponent(footerComponent, socialsParams);

  result = footerComponentRes;
} catch (e) {
  console.log(e.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
