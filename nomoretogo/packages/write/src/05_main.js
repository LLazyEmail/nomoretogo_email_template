import { writingFile } from 'markup-generator';

import { MainHTMLString } from 'display';

const partialWrite3 = (string, suffix) => {

  writingFile(string, suffix);
  // TODO add a function that will display an output in console.  
return true;
}

export default partialWrite3(MainHTMLString, 'nmtg-Main')
 
