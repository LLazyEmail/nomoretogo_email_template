// Create wrap component content
import {
  contentButtonBlock,
  recipeComponent,
  contentSubTitleText,
  recipeRowBlock,
  contentTextDescription,
  contentTitleText,
} from 'nmtg-template-mailerlite-inner';

import {
  buttonComponent,
  separatorComponent,
} from 'nmtg-template-mailerlite-typography';



const createBlockOne = (contentTitleTextParams, contentSubTitleParams, contentTextDescriptionParams) => {

  // block 1
  const contentTitleTextRes = contentTitleText(contentTitleTextParams);
  const contentSubTitleTextRes = contentSubTitleText(contentSubTitleParams);

  const contentTextDescriptionRes = contentTextDescription(
    contentTextDescriptionParams
  );
  
  const text =
    contentTitleTextRes + contentSubTitleTextRes + contentTextDescriptionRes;

    return text;

};


// TODO move Weekly menu button section into sub-components
const contentSubComponent = (text, recipeRowBlockRes, contentButtonParams) => {

  // weekly menu button
  const buttonHTML = buttonComponent(contentButtonParams);

  const contentButtonBlockHTML = contentButtonBlock(buttonHTML);
  
  const separatorHTML = separatorComponent();
  // All content
  const allContent = 
      text +
      recipeRowBlockRes + 
      contentButtonBlockHTML + 
      separatorHTML;

  return allContent;

}


  // block 2
const createRecipesPanel = (recipes) => {




  var imagesAll = recipes.map((params) => {
    return recipeComponent(params);
  });

  console.log(imagesAll);

  
  console.log(imagesAll[0]);
  
  console.log(imagesAll[1]);


  const imageOne = dataImage[0];
  const imageTwo = dataImage[1];
  
  
  const recipeRowBlockHTML = recipeRowBlock(imageOne, imageTwo);

  return recipeRowBlockHTML;
}



const StaticComponent = (params) => {
  // distructure params
  const {
    contentTitleTextParams,
    contentSubTitleParams,
    contentTextDescriptionParams,

    // TODO: create an object for recipes data only
    recipes,
    // dataImage,


    contentButtonParams,
  } = params;


  if (!recipes) {
    throw new Error('no recipes was passed');
  }

  // if (!dataImage) {
  //   throw new Error('no body was passed');
  // }

  if (!contentButtonParams) {
    throw new Error('no contentButtonParams was passed');
  }

  
  const text = createBlockOne(contentTitleTextParams, contentSubTitleParams, contentTextDescriptionParams);

  const recipeRowBlockRes = createRecipesPanel(recipes)

  // All content
  const allContent = contentSubComponent(text, recipeRowBlockRes, contentButtonParams);
  
  return allContent;
};

export default StaticComponent;

// export default function (params) {
//   return StaticComponent(params);
// }
