import createComponent from './createComponentUniversal';
//---------------


import { TopPanelSection, contentMainTableWrap }  from 'inner'; 



//---------------------------

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  // Top panel view in brows  

  //  const topPanel = '';
  const topPanelHTML = TopPanelSection();


  var settings = {
    topPanel: topPanelHTML, 
    blockLogo: tableHeaderBlockLogo(),
  };

  // ContentMainTableWrap
  result = createComponent(contentMainTableWrap, settings);

} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */

export default result;
