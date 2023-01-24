import { writingFile } from 'markup-generator';

import { ContentHTMLString } from 'display';

const partialWrite3 = (string, suffix) => {

  writingFile(string, suffix);
  // TODO add a function that will display an output in console.  
      return true;
}

export default partialWrite3(ContentHTMLString, 'nmtg-content')


