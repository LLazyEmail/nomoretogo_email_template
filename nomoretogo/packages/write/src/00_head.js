import { writingFile } from 'markup-generator';

import { HeadHTMLString } from 'display';


const partialWrite1 = (string, suffix) => {

  writingFile(string, suffix);
  // TODO add a function that will display an output in console.  
  return true;
}

export default partialWrite1(HeadHTMLString, 'nmtg-Head');

// writingFile(HeadHTMLString, 'nmtg-Head');
 
