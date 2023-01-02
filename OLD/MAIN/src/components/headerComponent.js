// we have copy of this component @ innerTemplate folder
// https://github.com/LLazyEmail/nomoretogo_email_template/issues/429
// 
import createComponent from '../display/createComponentUniversal';

//------------------
// TODO just for a header with one unsubscribe link
// we have so many stuff going on here. looks weak
import {
    viewInBrowserLink,
    topPanelViewInBrows,
    // tableHeaderBlockLogo,
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
// TODO move to innerTemplate component later and probably merge few files together
  const headerComponent = () => {

    const ViewInBrowserLinkHTML = view_in_browser(viewInBrowserLinkParams);

    // Top panel view in brows
  
    // const topPanel = '';
    const topPanel = createComponent(
      topPanelViewInBrows,
      ViewInBrowserLinkHTML
    );

    console.log(topPanel);
    return topPanel;
  }

  export default headerComponent;
