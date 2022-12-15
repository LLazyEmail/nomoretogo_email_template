import recipesSectionComponent from '../components/recipesSectionComponent';

import { recipes } from '../config';


// const contentButtonParams = {
//   id: '04-22-2021',
//   href: 'https://www.nomoretogo.com/weekly-menu/',
//   text: '123',
// };


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