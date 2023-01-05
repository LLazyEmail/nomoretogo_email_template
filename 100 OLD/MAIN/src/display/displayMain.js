// Create Main display
// import ow from 'ow';
import createComponent from './createComponentUniversal';
import mainComponent from '../components/mainComponent';


const displayHead = 'xxx';
// import displayHead from '../display/displayHead';






import BodyHTMLString from './displayBody';
/////////




// import displayFooterHTML from '../display/displayFooter';
const displayFooterHTML = 'xxx';



//----------






/* ******************** DATA START **************************************** */
var MainHTMLTemplate = null;
var error = '';

var settings = '';
var result = null;



if (displayHead == null) {
  error = 'Empty displayHead';
}


// ow(displayHead, ow.string);
// ow(BodyHTMLString, ow.string.minLength(5));
// ow(displayFooterHTML, ow.string.minLength(5));



if (displayFooterHTML == null) {
  error = 'Empty displayFooter';
}

/* ******************** DATA END **************************************** */





/* ******************** CREATE CONTENT START ****************************** */
if (error == '') {
  
  
  
  
  // const bodyContentParams = `
  //   ${displayContentMainTableWrap}
  //   ${displayContent}
  //   ${displayInstructionHTMLString}

  //   `;

  // const BodyComponentHTML = createComponent(bodyComponent, bodyContentParams);

  // console.log(BodyComponentHTML);
  
  
//variant one
// const settings = {
//   component: MainComponent,
//   params: { head: headString, body: BodyHTMLString },
// };
  
  
  settings = {
    head: displayHead,
    
    body: BodyHTMLString,
    
    footer: displayFooterHTML
  };

  
  MainHTMLTemplate = createComponent(mainComponent, settings);

  result = `
  ${displayHead}  
  ${BodyHTMLString} 
  ${displayFooterHTML}
  `;
  
  
  
  

  // console.log(result);

} else {
  const mesError = `Error in component: "displayMain",  error message: "${error}"`;
  console.log(mesError);
}
/* ******************** CREATE CONTENT END ****************************** */


export default MainHTMLTemplate;

// export {
//     result as MainHTMLTemplate,
//    settings
// }
