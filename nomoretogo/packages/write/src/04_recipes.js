import { writingFile } from 'markup-generator';

import { RecipesHTMLString } from 'display';

import writeFileParticle from 'utils';


export default writeFileParticle(RecipesHTMLString, 'nmtg-recipe')
