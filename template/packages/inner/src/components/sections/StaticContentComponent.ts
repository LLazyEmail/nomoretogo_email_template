// Create wrap component content
import { buttonComponent } from 'html-typography-tags';


// import {
//   // recipeComponent,
//   contentSubTitleText,

//   contentTextDescription,
//   contentTitleText,
// } from 'inner';



import title from '../content/title';
import subtitle from '../content/subtitle';
import description from '../content/description';

import {
  separatorComponent
} from "nmtg-template-mailerlite-typography"

import recipesContainerComponent from '../recipes/recipesContainerComponent';


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

const createBlockOne = (titleVar:string, subtitleVar:string, descriptionVar:string) => {

  // block 1
  const contentTitleTextHTML = title(titleVar);


  const contentSubTitleTextHTML = 'contentSubTitleText(subTitle)';
  // const contentSubTitleTextHTML = subtitle(subtitleVar);

  const contentTextDescriptionHTML = description(
    descriptionVar, descriptionVar
  );
  
  const result =
    contentTitleTextHTML + 
    contentSubTitleTextHTML + 
    contentTextDescriptionHTML;
  // return title + subTitle + description;


  return result;

};


// TODO move Weekly menu button section into sub-components
// it was already moved into weeklyMenuButton.ts file
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
