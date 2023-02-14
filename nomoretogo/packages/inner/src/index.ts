// Header
import { 
  TopPanelSection, contentMainTableWrap 
} from './components/header/index';


import {
   contentSubTitleText, contentTextDescription, contentTitleText
} from './components/content';

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

//----------------------
export {

  TopPanelSection, contentMainTableWrap, 
  //-----------------

  // contentButtonBlock,

  contentSubTitleText,

  contentTextDescription,
  contentTitleText,
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
  StaticContentComponent
};

