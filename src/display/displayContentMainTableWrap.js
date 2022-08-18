import createComponent from './createComponentUniversal';

//---------------
// import contentMainTableWrap from '../components/_contentMainTableWrap';

import { viewInBrowserLink } from 'nmtg-template-mailerlite-miscellaneous';

import { contentMainTableWrap } from 'nmtg-template-mailerlite-outertemplate';

import {
  topPanelViewInBrows,
  tableHeaderBlockLogo,
} from 'nmtg-template-mailerlite-inner';

console.log(contentMainTableWrap);
/* ******************** DATA START **************************************** */
// View in brows link
const viewInBrowserLinkParams = {
  id: 'view-id',
  href: 'https://preview.mailerlite.com/r0n8w0g0n6/1934358861754405982/l8n5/',
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
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */

export default result;
