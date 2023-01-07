// Create wrap component content
import {
  contentButtonBlock,
  // recipeComponent,
  contentSubTitleText,
  // recipeRowBlock,
  contentTextDescription,
  contentTitleText,
} from 'innerTemplate';

import {
  buttonComponentOld,
  separatorComponent,
} from 'nmtg-typo';

import recipesSectionComponent from './recipesSectionComponent';


// const contentSectionOne = () => {
//   // contentTitleText
//   const title = createComponent(contentTitleText, contentTitleTextParams);
//   // contentSubTitleText
//   const subTitle = createComponent(contentSubTitleText, contentSubTitleParams);
//   // contentTextDescription
//   const description = createComponent(
//     contentTextDescription,
//     contentTextDescriptionParams
//   );

//   return title + subTitle + description;
// };


// contentSectionOne = () => {

const createBlockOne = (title, subTitle, description) => {

  // block 1
  const contentTitleTextHTML = contentTitleText(title);


  const contentSubTitleTextHTML = 'contentSubTitleText(subTitle)';
  // const contentSubTitleTextHTML = contentSubTitleText(subTitle);

  const contentTextDescriptionHTML = contentTextDescription(
    description
  );
  
  const result =
    contentTitleTextHTML + 
    contentSubTitleTextHTML + 
    contentTextDescriptionHTML;
  // return title + subTitle + description;


  return result;

};


// TODO move Weekly menu button section into sub-components
const contentSubComponent = (text, recipeRowBlockRes, contentButtonParams) => {

  // weekly menu button
  const buttonHTML = buttonComponentOld(contentButtonParams);

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





// const contentSectionTwo = () => {
//   // All Recipe
//   var imagesAll = contentRecipeParams.map((params) => {
//     return createComponent(recipeComponent, params);
//   });
//   // All contentTableWitchTwoRecipe
//   const images = createComponent(recipeRowBlock, imagesAll);
//   // Button
//   const contentButtonRes = createComponent(
//     buttonComponent,
//     contentButtonParams
//   );
//   const buttonRes = createComponent(contentButtonBlock, contentButtonRes);

//   return images + buttonRes;
// };



// block 2
// const createRecipesPanel = (recipes) 


const StaticComponent = (params) => {
  // distructure params
  const {
    contentTitleTextParams,
    contentSubTitleParams,
    contentTextDescriptionParams,

    recipes,
    contentButtonParams,
  } = params;
// console.log(recipes);

  if (!recipes) {
    throw new Error('no recipes was passed');
  }

  if (!contentButtonParams) {
    throw new Error('no contentButtonParams was passed');
  }

  
  const text = createBlockOne(
    contentTitleTextParams, 
    contentSubTitleParams, 
    contentTextDescriptionParams
  );


  const recipesSectionHTML = recipesSectionComponent(recipes);

  // All content
  const allContent = contentSubComponent(text, recipesSectionHTML, contentButtonParams);
  
  return allContent;
};

export default StaticComponent;
