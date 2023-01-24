// we need to move some stuff into one file
// 
import createComponent from '../createComponentUniversal';

//------------------
// TODO just for a header with one unsubscribe link
// we have so many stuff going on here. looks weak

// import viewInBrowserLink from './viewInBrowserLink';
import topPanelViewInBrows from './topPanelViewInBrows';



import { viewInBrowserLinkParams } from '../../config';


import html_view_in_browser from './html_view_in_browser';
  
  
  
const headerComponent = () => {

  const ViewInBrowserLinkHTML = html_view_in_browser(viewInBrowserLinkParams);

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
