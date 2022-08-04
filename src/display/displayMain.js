// Create Main display
import createComponent from './createComponentUniversal';

import { bodyComponent } from 'nmtg-template-mailerlite-outertemplate'

import displayHead from '../display/displayHead';


import displayContentMainTableWrap from '../display/displayContentMainTableWrap';



import displayContent from '../display/displayContent';



import mainComponent from '../components/mainComponent';

//----------
import displayInstruction from '../display/displayInstruction';
// import displaySupportContact from '../display/displaySupportContact';



import displayFooter from '../display/displayFooter';

/* ******************** DATA START **************************************** */
var MainHTMLTemplate = null;
var error = '';

if (displayHead == null) {
  error = 'Empty displayHead';
}


if (displayContentMainTableWrap == null) {
  error = 'Empty displayContentMainTableWrap';
}
if (displayContent == null) {
  error = 'Empty displayContent';
}


if (displayInstruction == null) {
  error = 'Empty displayInstruction';
}

// TODO if we want to keep those checks, we need to move it into footer display probably
// if (displaySupportContact == null) {
//   error = 'Empty displaySupportContact';
// }
// if (displayImageAfterSupportComponent == null) {
//   error = 'Empty displayImageAfterSupportComponent';
// }

if (displayFooter == null) {
  error = 'Empty displayFooter';
}
/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
if (error == '') {
  
  // const bodyContentParams = `
  //   ${displayContentMainTableWrap}
  //   ${displayContent}
  //   ${displayInstruction}

  //   ${displayFooter}`;

  // const BodyComponentRes = createComponent(bodyComponent, bodyContentParams);

  // const cfg = {
  //   head: displayHead,
  //   body: BodyComponentRes
  // };

  // MainHTMLTemplate = createComponent(mainComponent, cfg)

  // result = `${displayHead}${BodyComponentRes}`;

  // console.log(result);

} else {
  const mesError = `Error in component: "displayMain",  error message: "${error}"`;
  console.log(mesError);
}
/* ******************** CREATE CONTENT END ****************************** */



export default MainHTMLTemplate;
