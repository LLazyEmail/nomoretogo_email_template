import createComponent from './createComponentUniversal';
//---------------


import { contentMainTableWrap } from 'outer';

import { headerSection }  from 'inner'; 

//------------------


// import { viewInBrowserLinkParams } from '../config';


//---------------------------

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  // Top panel view in brows  
  // const topPanel = createComponent(
  //   topPanelViewInBrows,
  //   ViewInBrowserHTML
  // );

//   const topPanel = '';
  const topPanel = headerComponent();


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
