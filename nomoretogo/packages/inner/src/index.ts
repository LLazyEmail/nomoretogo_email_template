// Header
import { 
  TopPanelSection, contentMainTableWrap 
} from './components/header/index';




//---------------------------

import instructionContainerComponent from './components/instruction/container';
import instructionContainerStatic from './components/instruction/containerStatic';

//--------------------------
import lineBlock from './components/lineBlock';


//----------------------
// removing other components related to recipes
// remove later as we have weekly menu
import recipesContainerComponent from './components/recipe';


import WeeklyMenuContainerComponent from './components/weekly-menu/WeeklyMenuComponent';


import StaticContentComponent from './components/staticContent/staticContent';


import SupportContainerComponent from './components/supportSection/container';

import contentContainer from './components/content/container';

// import {
//   contentSubTitleText, contentTextDescription, contentTitleText
// } from './components/content';

//----------------------
export {

  TopPanelSection,
  
  contentMainTableWrap, 
  //-----------------

  contentContainer,
  StaticContentComponent,

  //--------------------
  instructionContainerComponent,
  instructionContainerStatic,
  //------------
  recipesContainerComponent,
  WeeklyMenuContainerComponent,
  // instructionTitle,
  // instructionText,
  lineBlock,
  //----------
  SupportContainerComponent
};

