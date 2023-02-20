// we need to move some stuff into one file
// 
// import createComponent from '../../createComponentUniversal';

import viewInBrowserLink from './viewBrowserLink';


const html_view_in_browser = (params:any) => {

  // Link view in brows

  const htmlString = viewInBrowserLink(params);


  // const htmlString = createComponent(
  //   viewInBrowserLink,
  //   params
  // );

  return htmlString;

}
  
export default html_view_in_browser;
