import {
    // recipeComponent,
    recipeRowBlock
  } from 'innerTemplate';
  
// import {
//   buttonComponent,
//   separatorComponent,
// } from 'typo';


// usage
// var matrix = listToMatrix([1, 2, 3, 4, 4, 5, 6, 7, 8, 9], 3);

/**
 * Convert simple array into two-dimensional array (matrix)
 *
 * @param list The array
 * @param width The num of elements per sub-array
 * @return the new matrix
 */
export const listToMatrix = <T>(list: T[], width: number): T[][] => {
  const matrix = [];

  for (let i = 0, k = -1; i < list.length; i++) {
      if (i % width === 0) {
          k++;
          matrix[k] = [];
      }
      matrix[k].push(list[i]);
  }

  return matrix;
};

  

   // block 2
const createRecipesPanel = (recipes) => {

  // var recipeHTMLMarkupArray

  // TODO can be made better with listToMatrix method
  var recipeRowBlockHTML = recipeRowBlock(recipes[0], recipes[1]);
  // console.log(recipes[0]);
  recipeRowBlockHTML += recipeRowBlock(recipes[2], recipes[3]);
  recipeRowBlockHTML += recipeRowBlock(recipes[4], recipes[5]);

  // console.log(recipeRowBlockHTML);

  return recipeRowBlockHTML;
}


const recipesSectionComponent = (recipes) => {


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
  

export default recipesSectionComponent;
