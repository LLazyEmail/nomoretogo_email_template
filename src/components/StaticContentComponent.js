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
const createRecipesPanel = (contentRecipeParams, dataImage) => {




  var imagesAll = contentRecipeParams.map((params) => {
    return recipeComponent(params);
  });
  const imageOne = dataImage[0];
  const imageTwo = dataImage[1];
  const recipeRowBlockRes = recipeRowBlock(imageOne, imageTwo);

  return recipeRowBlockRes;
}



const StaticComponent = (params) => {
  // distructure params
  const {
    contentTitleTextParams,
    contentSubTitleParams,
    contentTextDescriptionParams,

    // TODO: create an object for recipes data only
    contentRecipeParams,
    dataImage,


    contentButtonParams,
  } = params;


  if (!contentRecipeParams) {
    throw new Error('no head was passed');
  }

  if (!dataImage) {
    throw new Error('no body was passed');
  }

  if (!contentButtonParams) {
    throw new Error('no footer was passed');
  }

  
  const text = createBlockOne(contentTitleTextParams, contentSubTitleParams, contentTextDescriptionParams);

  const recipeRowBlockRes = createRecipesPanel(contentRecipeParams, dataImage)

  // All content
  const allContent = contentSubComponent(text, recipeRowBlockRes, contentButtonParams);
  
  return allContent;
};

export default StaticComponent;

// export default function (params) {
//   return StaticComponent(params);
// }
