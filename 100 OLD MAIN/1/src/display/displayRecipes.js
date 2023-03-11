import recipesSectionComponent from '../components/recipesSectionComponent';

import { recipes } from '../config';


import { buttonComponent2 } from 'html-typography-tags';

// const contentButtonParams = {
//   id: '04-22-2021',
//   href: 'https://www.nomoretogo.com/weekly-menu/',
//   text: '123',
// };
const config = {id: '12', href: 'google.com'};

console.log(buttonComponent2(config));

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