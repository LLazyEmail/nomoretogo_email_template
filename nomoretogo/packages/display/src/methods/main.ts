// Create Main display
import { mainComponent } from 'inner';

// import headHTMLString from './head';
const displayHead = 'xxx';



import BodyHTMLString from './body';

// import footerHTMLString from './footer';
const displayFooterHTML = 'xxx';


// const bodyContentParams = `
  //   ${displayContentMainTableWrap}
  //   ${displayContent}
  //   ${displayInstructionHTMLString}

  //   `;
  
  
  // const BodyComponentHTML = createComponent(bodyComponent, bodyContentParams);

  // console.log(BodyComponentHTML);
  


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
