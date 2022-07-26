import footerComponent from 'nmtg-template-mailerlite-outertemplate';
import createComponent from './createComponentUniversal';

/* ******************** DATA START **************************************** */
// Footer params
const socialsParams = [
  { href: "https://www.facebook.com/nomoretogo/", src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/facebook.webp"},
  { href: "https://twitter.com/nomoretogo", src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/twitter.webp"},
  { href: "https://www.instagram.com/nomoretogo/"", src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/instagram.webp"},
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
