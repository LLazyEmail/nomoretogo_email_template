import { footerComponent } from 'nmtg-template-mailerlite-outertemplate';
import createComponent from './createComponentUniversal';

/* ******************** DATA START **************************************** */

// Footer params
const socialsLinksParams = [
  { href: '123', src: '123' },
  { href: '123', src: '123' },
  { href: '123', src: '123' },
];

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  result = createComponent(footerComponent, socialsLinksParams);
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
