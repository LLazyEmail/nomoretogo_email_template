// we need to move some stuff into one file
// 
import createComponent from '../createComponentUniversal';

import viewInBrowserLink from './viewInBrowserLink';


  const html_view_in_browser = (params) => {
  
    // Link view in brows
    const htmlString = createComponent(
      viewInBrowserLink,
      params
    );
  
    return htmlString;
  
  }
  
  export default html_view_in_browser;
