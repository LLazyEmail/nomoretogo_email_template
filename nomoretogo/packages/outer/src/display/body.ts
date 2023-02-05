// Body

import bodyComponent from '../components/bodyComponent';


// import createComponent from './createComponentUniversal';




import displayContentMainTableWrap from './displayContentMainTableWrap';

import displayContentHTML from './displayContent';
import displayInstruction from './displayInstruction';



/* ******************** DATA START **************************************** */
// Body params
const params = `
${displayContentMainTableWrap}
${displayContentHTML}
${displayInstruction}
`;
/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */

const BodyHTMLString = bodyComponent(params);
  
  
export default BodyHTMLString;