import { footerComponent } from 'nmtg-template-mailerlite-outertemplate';
import createComponent from './createComponentUniversal';

/* ******************** DATA START **************************************** */



// Footer params
const socialsLinksParams = [{ 
    href: "https://www.facebook.com/nomoretogo/", src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/facebook.webp"
  },
  { 
    href: "https://twitter.com/nomoretogo", src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/twitter.webp"
  },
  { 
    href: "https://www.instagram.com/nomoretogo/", src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/instagram.webp"
  }];

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
// var result = null;
// try {
  const footerComponentRes = createComponent(footerComponent, socialsLinksParams);

//   result = footerComponentRes;
// } catch (error) {
//   console.log(error);
//   // console.log(error.message);
// }
/* ******************** CREATE CONTENT END ****************************** */
export default footerComponentRes;
