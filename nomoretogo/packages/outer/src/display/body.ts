// Body

import { bodyComponent } from 'outer';

import createComponent from './createComponentUniversal';





import displayContentMainTableWrap from './displayContentMainTableWrap';

import displayContentHTML from './displayContent';
import displayInstruction from './displayInstruction';



/* ******************** DATA START **************************************** */
// Body params

// const displayContentMainTableWrap = 'xxx';
// const displayContentHTML = "xxx";

const bodyComponentParams = `
${displayContentMainTableWrap}
${displayContentHTML}
${displayInstruction}
`;
/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
// try {
  // contentTitleText
  const bodyComponentRes 
  
  
  
  = createComponent(
    bodyComponent, 
    bodyComponentParams
  );


  
  result = bodyComponentRes;
  
  // console.log(result);