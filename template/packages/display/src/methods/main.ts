// Create Main display
import { mainComponent } from 'nmtg-template-mailerlite-outertemplate';

// import headHTMLString from './head';
const displayHead = 'xxx';



import BodyHTMLString from './body';

// import footerHTMLString from './footer';
const displayFooterHTML = 'xxx';



const settings = {
    head: displayHead,
    
    body: BodyHTMLString,
    
    footer: displayFooterHTML
  };

  
const MainHTMLTemplate = mainComponent(settings);

console.log(MainHTMLTemplate);

export default MainHTMLTemplate;

// export {
//     result as MainHTMLTemplate,
//    settings
// }
