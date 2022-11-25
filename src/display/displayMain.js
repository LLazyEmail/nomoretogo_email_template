// Create Main display
import createComponent from './createComponentUniversal';



import mainComponent from '../components/mainComponent';

import displayHead from '../display/displayHead';






/////
import { bodyComponent } from 'nmtg-template-mailerlite-outertemplate'







import displayContentMainTableWrap from '../display/displayContentMainTableWrap';



import displayContent from '../display/displayContent';





import displayInstructionHTMLString from '../display/displayInstruction';
// import displaySupportContact from '../display/displaySupportContact';



import BodyHTMLString from '../display/displayBody';
/////////




import displayFooterHTML from '../display/displayFooter';







//----------






/* ******************** DATA START **************************************** */
var MainHTMLTemplate = null;
var error = '';

var settings = '';
var result = false;

if (displayHead == null) {
  error = 'Empty displayHead';
}





if (displayContentMainTableWrap == null) {
  error = 'Empty displayContentMainTableWrap';
}
if (displayContent == null) {
  error = 'Empty displayContent';
}

if (displayInstructionHTMLString == null) {
  error = 'Empty displayInstruction';
}




// TODO if we want to keep those checks, we need to move it into footer display probably
// if (displaySupportContact == null) {
//   error = 'Empty displaySupportContact';
// }
// if (displayImageAfterSupportComponent == null) {
//   error = 'Empty displayImageAfterSupportComponent';
// }



if (displayFooterHTML == null) {
  error = 'Empty displayFooter';
}

// if (displayFooterHTML == null) {
//   error = 'Empty displayFooter';
// }
/* ******************** DATA END **************************************** */





/* ******************** CREATE CONTENT START ****************************** */
if (error == '') {
  
  
  
  

  
  const bodyContentParams = `
    ${displayContentMainTableWrap}
    ${displayContent}
    ${displayInstructionHTMLString}

    `;

  const BodyComponentHTML = createComponent(bodyComponent, bodyContentParams);

  console.log(BodyComponentHTML);

  
  
  
  
  
//variant one
// const settings = {
//   component: MainComponent,
//   params: { head: headString, body: BodyHTMLString },
// };
  
  
  settings = {
    head: displayHead,
    
    body: BodyComponentHTML,
    
    footer: displayFooterHTML
  };

  
  MainHTMLTemplate = createComponent(mainComponent, settings)

  result = displayHead + BodyComponentHTML + displayFooterHTML;
  
  
  
  

  // console.log(result);

} else {
  const mesError = `Error in component: "displayMain",  error message: "${error}"`;
  console.log(mesError);
}
/* ******************** CREATE CONTENT END ****************************** */



export {
   MainHTMLTemplate,
   settings
}
