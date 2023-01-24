import { writingFile } from 'markup-generator';

import BodyHTMLString from 'display';


const partialWrite3 = (string, suffix) => {

  writingFile(string, suffix);
  // TODO add a function that will display an output in console.  

}

export default partialWrite3(BodyHTMLString, 'nmtg-Body')

