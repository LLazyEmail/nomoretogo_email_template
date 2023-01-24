import { recipesSectionComponent } from 'inner';

import { recipes } from '../config';



var RecipesHTMLString = null;


RecipesHTMLString = recipesSectionComponent(recipes);

// RecipesHTMLString = recipesSectionComponent({

//   recipes,
//   contentButtonParams,

// });


if (!RecipesHTMLString) {
  throw new Error('RecipesHTMLString empty');
}


// console.log(RecipesHTMLString);

export default RecipesHTMLString;
