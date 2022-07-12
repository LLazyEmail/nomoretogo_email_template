// Get components

// inner tamplate
import { contentMainTableWrap } from '../components/innerTemplate (not working)/src/index';

import {
  address,
  createSocialItem,
  unsubscribeLink,
  viewInBrowserLink,
} from 'nmtg-template-mailerlite-miscellaneous';

// outerTemplate tamplate start
import {
  blobHead,
  bodyStyle,
  font1,
  font2,
  //---------------
  // footerComponent,
  // headComponent,
  //---------------
  headMetaTags,
  ifStyle,
  mediaStyle,
  style,
  style2,
  //---------------
  // tableHeaderBlockLogo,
  // topPanelViewInBrows,
  //---------------
} from 'nmtg-template-mailerlite-outertemplate';

import {
  footerComponent,
  headComponent,
  tableHeaderBlockLogo,
  topPanelViewInBrows,
} from './domain/outer/index';

// outerTemplate tamplate end

// typography start

import {
  headings,
  paragraph,
  strong,
} from '../components/typography/src/index';

// typography end

import recipe from './components/recipeComponent.js';
import button from './components/old_get-button.js';
import link from './components/old_get-link.js';

// TODO change the name of get-support-contact. its not clear what is inside of this component
import supportContact from './components/old_get-supportContact.js';
// import content from './components/old_get-content.js';
import content from './components/contentComponent';
import tableForNotes from './components/old_tableForNotes.js';
import tableWithTwoRecipes from './components/tableWithTwoRecipes.js';

export {
  // UnsubLink,
  // SocialMedia,
  // address,
  //--------

  recipe,
  button,
  link,
  supportContact,
  content,
  tableForNotes,
  tableWithTwoRecipes,
  // inner tamplate start
  contentMainTableWrap,
  // inner tamplate end

  // outerTamplate start
  blobHead,
  bodyStyle,
  font1,
  font2,
  footerComponent,
  headComponent,
  headMetaTags,
  ifStyle,
  mediaStyle,
  style,
  style2,
  tableHeaderBlockLogo,
  topPanelViewInBrows,
  // outerTamplate end

  // typography start
  headings,
  paragraph,
  strong,
  // typography end
};
