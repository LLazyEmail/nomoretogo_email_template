// Body
import ow from 'ow';
import bodyComponent from '../components/bodyComponent';


// import createComponent from './createComponentUniversal';


// import displayContentMainTableWrap from '../components/displayContentMainTableWrap';
// import displayContentHTML from './displayContent';
// import displayInstruction from './displayInstruction';


const displayContentMainTableWrap = '';
const displayContentHTML = '';
const displayInstruction = '';

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