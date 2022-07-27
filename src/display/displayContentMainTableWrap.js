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
} catch (eerror) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */

export default result;
