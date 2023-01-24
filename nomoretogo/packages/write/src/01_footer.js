import { writingFile } from 'markup-generator';

import { FooterHTMLString } from 'display';


const partialWrite2 = (string, suffix) => {

  writingFile(string, suffix);
  // TODO add a function that will display an output in console.  
  return true;
}

export default partialWrite2(FooterHTMLString, 'nmtg-footer')

