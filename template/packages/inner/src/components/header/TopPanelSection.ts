// import createComponent from '../../createComponentUniversal';

//------------------

import { viewInBrowserLinkParams } from '../../config';

import topPanelViewInBrows from './topPanelViewInBrows';


import html_view_in_browser from './html_view_in_browser';
  
  
  
const TopPanelSection = () => {

  const ViewInBrowserLinkHTML = html_view_in_browser(viewInBrowserLinkParams);

  // topPanelViewInBrows

  // Top panel view in brows

  // const topPanel = '';

  const topPanel = topPanelViewInBrows(ViewInBrowserLinkHTML);

  // const topPanel = createComponent(
  //   topPanelViewInBrows,
  //   ViewInBrowserLinkHTML
  // );

  console.log(topPanel);
  return topPanel;
}

export default TopPanelSection;
