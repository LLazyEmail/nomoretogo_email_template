// Header
import { TopPanelSection, contentMainTableWrap } from './components/header/index';


import {
   contentSubTitleText, contentTextDescription, contentTitleText
} from './components/content';

//---------------------------

// import instructionTitle from './components/instruction/title';
// import instructionText from './components/instruction/text';


import instructionContainerComponent from './components/instruction/container';
import instructionContainerStatic from './components/instruction/container-static';



//--------------------------
import lineBlock from './components/lineBlock';


//----------------------
// removing other components related to recipes
import recipesContainerComponent from './components/recipe';

import StaticComponent from './components/staticContent/staticContent';

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

  // instructionTitle,
  // instructionText,
  lineBlock,
  //----------
  StaticComponent
};

