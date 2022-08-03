import { footerComponent, amazonFreshBlock } from 'nmtg-template-mailerlite-outertemplate';

import createComponent from './createComponentUniversal';

import socialsLinksParams from './socialLinksData';
/* ******************** DATA START **************************************** */

import {     
  buttonComponent2
 } from 'nmtg-template-mailerlite-typography';

//  buttonComponent2({id: '12', href: 'google.com'});


// TODO can be moved into config later
const imagePath = 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/amazon.png';



/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {


  const imageBlock = createComponent(
    amazonFreshBlock,
    imagePath
  );


  const config = {
    socialLinks: socialsLinksParams,
    amazonFreshBlock: imageBlock
  }


  result = createComponent(footerComponent, config);
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
