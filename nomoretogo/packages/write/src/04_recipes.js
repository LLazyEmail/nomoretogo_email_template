import { writingFile } from 'markup-generator';

import { RecipesHTMLString } from 'display';

const partialWrite3 = (string, suffix) => {

writingFile(string, suffix);
// TODO add a function that will display an output in console.  
return true;
}

export default partialWrite3(RecipesHTMLString, 'nmtg-recipe')
