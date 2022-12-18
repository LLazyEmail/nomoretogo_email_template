import createComponent from './createComponentUniversal';

//---------------

// import { viewInBrowserLink } from 'nmtg-template-mailerlite-inner';

import { contentMainTableWrap } from 'nmtg-template-mailerlite-outertemplate';


//------------------
// TODO just for a header with one unsubscribe link
// we have so many stuff going on here. looks weak
import {
  viewInBrowserLink,
  topPanelViewInBrows,
  tableHeaderBlockLogo,
} from 'nmtg-template-mailerlite-inner';

import { viewInBrowserLinkParams } from '../config';

// TODO move this component away at some point in the future
const view_in_browser = (params) => {

  // Link view in brows
  const htmlString = createComponent(
    viewInBrowserLink,
    params
  );

  return htmlString;

}
//---------------------------

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  // Link view in brows
  // const linkViewInBrows = createComponent(
  //   viewInBrowserLink,
  //   viewInBrowserLinkParams
  // );

  const ViewInBrowserHTML = view_in_browser(viewInBrowserLinkParams);

  // Top panel view in brows

  // const topPanel = '';
  const topPanel = createComponent(
    topPanelViewInBrows,
    ViewInBrowserHTML
  );


  var settings = {
    topPanel: topPanel, 
    blockLogo: tableHeaderBlockLogo(),
  };

  // ContentMainTableWrap
  result = createComponent(contentMainTableWrap, settings);

} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */

export default result;
