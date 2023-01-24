import { writingFile } from 'markup-generator';
// TODO add ow for running checks

import headerComponent from '../src/components/headerComponent';

const topPanel = headerComponent();

console.log(topPanel)


const partialWrite3 = (string, suffix) => {

  writingFile(string, suffix);
  // TODO add a function that will display an output in console.  
return true;
}

export default partialWrite3(topPanel, 'nmtg-top')
