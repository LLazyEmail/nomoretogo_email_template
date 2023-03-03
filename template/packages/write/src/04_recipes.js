import { RecipesHTMLString } from 'nmtg-template-display';

import writeFileParticle from 'markup-generator';


export default writeFileParticle(RecipesHTMLString, 'nmtg-recipe')
