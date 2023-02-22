// Body
// import ow from 'ow';

import { bodyComponent } from 'outer';


import contentHTMLString from '../content/content'
import WeeklyMenuHTMLString from '../content/weekly';


// import displayContentMainTableWrap from '../components/displayContentMainTableWrap';
import headerAndContentHTMLString from './header';


// Body params
const params = `
${headerAndContentHTMLString}
${contentHTMLString}
${WeeklyMenuHTMLString}

`;


const BodyHTMLString = bodyComponent(params);
  
  
export default BodyHTMLString;