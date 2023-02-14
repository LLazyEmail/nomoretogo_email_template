// Body
// import ow from 'ow';

import { bodyComponent } from 'outer';



import RecipesHTMLString from './recipes';





// import contentContainer from ''
// import contentHTML from ''
// import instructionHTML from ''

// import displayContentMainTableWrap from '../components/displayContentMainTableWrap';
// import displayContentHTML from './displayContent';
// import displayInstruction from './displayInstruction';


const displayContentMainTableWrap = '';
const displayContentHTML = '';
const displayInstruction = '';


// Body params
const params = `
${displayContentMainTableWrap}
${displayContentHTML}
${displayInstruction}
`;


/* ******************** CREATE CONTENT START ****************************** */

const BodyHTMLString = bodyComponent(params);
  
  
export default BodyHTMLString;