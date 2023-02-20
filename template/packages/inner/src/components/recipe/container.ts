import recipeRowBlock from './row';
// import { listToMatrix } from './utils';

// block 2
const createRecipesPanel = (recipes:any) => {

  // var recipeHTMLMarkupArray

  // TODO can be made better with listToMatrix method
  let recipeRowBlockHTML = recipeRowBlock(recipes[0], recipes[1]);
  // console.log(recipes[0]);
  recipeRowBlockHTML += recipeRowBlock(recipes[2], recipes[3]);
  recipeRowBlockHTML += recipeRowBlock(recipes[4], recipes[5]);

  // console.log(recipeRowBlockHTML);

  return recipeRowBlockHTML;
}


const recipesContainerComponent = (recipes:any) => {


  if (!recipes) {
    throw new Error('no recipes was passed');
  }

  // console.log(recipes);
  // if (!contentButtonParams) {
  //   throw new Error('no contentButtonParams was passed');
  // }

  const recipeRowBlockHTML = createRecipesPanel(recipes);

  return recipeRowBlockHTML;
}
  

export default recipesContainerComponent;
