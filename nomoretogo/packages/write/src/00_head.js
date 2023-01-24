import { writingFile } from 'markup-generator';

import { HeadHTMLString } from 'display';

import writeFileParticle from 'utils';

// const partialWrite1 = (string, suffix) => {

//   writingFile(string, suffix);
//   // TODO add a function that will display an output in console.  
//   return true;
// }

export default writeFileParticle(HeadHTMLString, 'nmtg-Head');

// writingFile(HeadHTMLString, 'nmtg-Head');
 
