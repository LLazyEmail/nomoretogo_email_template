import {
    recipeComponent,
    recipeRowBlock
  } from 'nmtg-template-mailerlite-inner';
  
// import {
//   buttonComponent,
//   separatorComponent,
// } from 'nmtg-template-mailerlite-typography';


// usage
// var matrix = listToMatrix([1, 2, 3, 4, 4, 5, 6, 7, 8, 9], 3);
function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}



  // TODO move Weekly menu button section into sub-components
// const contentSubComponent = (text, recipeRowBlockRes, contentButtonParams) => {

//     // weekly menu button
//     const buttonHTML = buttonComponent(contentButtonParams);
  
//     const contentButtonBlockHTML = contentButtonBlock(buttonHTML);
    
//     const separatorHTML = separatorComponent();
//     // All content
//     const allContent = 
//         text +
//         recipeRowBlockRes + 
//         contentButtonBlockHTML + 
//         separatorHTML;
  
//     return allContent;
  
//   }

  

   // block 2
const createRecipesPanel = (recipes) => {

  // var recipeHTMLMarkupArray

    // var imagesAll = recipes.map((values) => {
  
    //   // console.log(params);
  
    //   return recipeComponent(values);
    // });
  
    // console.log(imagesAll.length);
  
    // 
    // TODO can be made better with listToMatrix method
    var recipeRowBlockHTML = recipeRowBlock(recipes[0], recipes[1]);
    recipeRowBlockHTML += recipeRowBlock(recipes[2], recipes[3]);
    recipeRowBlockHTML += recipeRowBlock(recipes[4], recipes[5]);

    // console.log(recipeRowBlockHTML);

    return recipeRowBlockHTML;
}


const recipesSectionComponent = (params) => {

  const {
    recipes,
    contentButtonParams
  } = params;
  
  if (!recipes) {
    throw new Error('no recipes was passed');
  }

  if (!contentButtonParams) {
    throw new Error('no contentButtonParams was passed');
  }

  const recipeRowBlockHTML = createRecipesPanel(recipes);

  // console.log(recipeRowBlockHTML);
  return recipeRowBlockHTML;
}
  

export default recipesSectionComponent;