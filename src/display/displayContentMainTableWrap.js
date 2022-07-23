////////////////////////////////////////////////////////////////
// import { displayFactoryTwo } from 'email-template-object';
// import Factory from './factory';
// import contentMainTableWrap from '../components/contentMainTableWrap';

// import {
//   topPanelViewInBrows,
//   tableHeaderBlockLogo,
// } from 'nmtg-template-mailerlite-inner';

// var error = '';
// var result = null;
// try {
// var params = {
//   blobHead: blobHead(),
//   bodyStyle: bodyStyle(),
//   font1: font1(),
//   font2: font2(),
//   headMetaTags: headMetaTags(),
//   ifStyle: ifStyle(),
//   mediaStyle: mediaStyle(),
//   style: style(),
//   style2: style2(),

//   // variable:value,
//   title: 'text title',
// };

//   const factory = new Factory(contentMainTableWrap, params);
//   result = factory.create();
// } catch (e) {
//   error = e.message;
// }

// if (error != '') {
//   console.log(error);
// }

// export default result;

//////////////////////////////////////////////////////////////////
import createComponent from './createComponentUniversal';
import contentMainTableWrap from '../components/contentMainTableWrap';
import { viewInBrowserLink } from 'nmtg-template-mailerlite-miscellaneous';

import {
  topPanelViewInBrows,
  tableHeaderBlockLogo,
} from 'nmtg-template-mailerlite-inner';

/* ******************** DATA START **************************************** */
// View in brows link
const viewInBrowserLinkParams = {
  id: '123',
  href: '123',
};

var contentMainTableWrapParams = {
  topPanel: '',
  blockLogo: tableHeaderBlockLogo(),
};

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  // Link view in brows
  const linkViewInBrows = createComponent(
    viewInBrowserLink,
    viewInBrowserLinkParams
  );

  // Top panel view in brows
  contentMainTableWrapParams.topPanel = createComponent(
    topPanelViewInBrows,
    linkViewInBrows
  );

  // ContentMainTableWrap
  result = createComponent(contentMainTableWrap, contentMainTableWrapParams);
} catch (e) {
  console.log(e.message);
}
/* ******************** CREATE CONTENT END ****************************** */

export default result;
