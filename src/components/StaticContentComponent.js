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


const contentSubComponent = (text, recipeRowBlockRes, contentButtonParams) => {

  
  const buttonComponentRes = buttonComponent(contentButtonParams);

  const contentButtonBlockRes = contentButtonBlock(buttonComponentRes);
  
  const separator = separatorComponent();
  const contentAndAfter = recipeRowBlockRes + contentButtonBlockRes + separator;
  
  

  // All content
  const allContent = text + contentAndAfter;

  return allContent;

}


const createRecipesPanel = (contentRecipeParams, dataImage) => {


  // block 2
  var imagesAll = contentRecipeParams.map((params) => {
    return recipeComponent(params);
  });
  const imageOne = dataImage[0];
  const imageTwo = dataImage[1];
  const recipeRowBlockRes = recipeRowBlock(imageOne, imageTwo);


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
  
  
  
  // block 1
  // const contentTitleTextRes = contentTitleText(contentTitleTextParams);
  // const contentSubTitleTextRes = contentSubTitleText(contentSubTitleParams);

  // const contentTextDescriptionRes = contentTextDescription(
  //   contentTextDescriptionParams
  // );
  
  const text =  createBlockOne(contentTitleTextParams, contentSubTitleParams, contentTextDescriptionParams);




  // block 2
  // var imagesAll = contentRecipeParams.map((params) => {
  //   return recipeComponent(params);
  // });
  // const imageOne = dataImage[0];
  // const imageTwo = dataImage[1];
  // const recipeRowBlockRes = recipeRowBlock(imageOne, imageTwo);

  

  var imagesAll = createRecipesPanel(contentRecipeParams, dataImage)
  





  // const buttonComponentRes = buttonComponent(contentButtonParams);

  // const contentButtonBlockRes = contentButtonBlock(buttonComponentRes);
  
  
  // const separator = separatorComponent();
  // const contentAndAfter = recipeRowBlockRes + contentButtonBlockRes + separator;
  
  

  // All content
  const allContent = contentSubComponent(text, recipeRowBlockRes, contentButtonParams);
  
  return allContent;
};

// export default StaticComponent;

export default function (params) {
  return StaticComponent(params);
}
