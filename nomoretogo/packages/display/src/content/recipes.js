import { recipesSectionComponent } from 'inner';

import { recipes } from '../config';

var RecipesHTMLString = recipesSectionComponent(recipes);


if (!RecipesHTMLString) {
  throw new Error('RecipesHTMLString empty');
}


// console.log(RecipesHTMLString);

export default RecipesHTMLString;
