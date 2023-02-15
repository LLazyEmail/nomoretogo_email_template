import { recipesContainerComponent } from 'inner';

import { recipes } from '../config';

var RecipesHTMLString = recipesContainerComponent(recipes);


if (!RecipesHTMLString) {
  throw new Error('RecipesHTMLString empty');
}


// console.log(RecipesHTMLString);

export default RecipesHTMLString;
