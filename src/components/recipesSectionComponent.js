import {
    // contentButtonBlock,
    recipeComponent,
    // contentSubTitleText,
    recipeRowBlock,
    // contentTextDescription,
    // contentTitleText,
  } from 'nmtg-template-mailerlite-inner';
  
  // import {
  //   buttonComponent,
  //   separatorComponent,
  // } from 'nmtg-template-mailerlite-typography';



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

    var imagesAll = recipes.map((params) => {
  
      // console.log(params);
  
      return recipeComponent(params);
    });
  
    // console.log(imagesAll);
  
    
    // console.log(imagesAll[0]);
    
    // console.log(imagesAll[1]);
  
  
    const imageOne = imagesAll[0];
    const imageTwo = imagesAll[1];
    // 
    
    const recipeRowBlockHTML = recipeRowBlock(imageOne, imageTwo);
  
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