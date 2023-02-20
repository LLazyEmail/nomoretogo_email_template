// export * from './lib/inner';
// Header
import { 
    TopPanelSection, contentMainTableWrap, tableHeaderBlockLogo 
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


import contentContainer from './components/content/container';

import SupportContainerComponent from './components/supportSection/container';

// import {
//   contentSubTitleText, contentTextDescription, contentTitleText
// } from './components/content';
  
//----------------------
export {

    TopPanelSection,

    contentMainTableWrap, 
    tableHeaderBlockLogo,
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

  
