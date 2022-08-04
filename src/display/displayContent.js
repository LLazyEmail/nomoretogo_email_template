import contentComponent from '../components/contentComponent';

import createComponent from './createComponentUniversal';

import {
  contentButtonBlock,
  recipeComponent,
  contentSubTitleText,
  recipeRowBlock,
  contentTextDescription,
  contentTitleText,
  emptyBlock,
} from 'nmtg-template-mailerlite-inner';

// import { button } from 'nmtg-template-mailerlite-typography';
import {
  buttonComponent,
  // buttonComponent2,
} from 'nmtg-template-mailerlite-typography';

import contentRecipeParams from './recipesData';
//  buttonComponent2({id: '12', href: 'google.com'});

/* ******************** DATA START **************************************** */
// Title
const contentTitleTextParams = {
  hrefTitle: '123',
  idTitle: '123',
  textTitle: '123',
};

// Sub title
const contentSubTitleParams = '123';

// Description
const contentTextDescriptionParams = {
  textTop: '123',
  textBottom: '123',
};

//-------------------

// Button
//
const contentButtonParams = {
  id: '04-22-2021',
  href: 'https://www.nomoretogo.com/weekly-menu/',
  text: '123',
};
/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */

const contentSectionOne = () => {
  // contentTitleText
  const title = createComponent(contentTitleText, contentTitleTextParams);
  // contentSubTitleText
  const subTitle = createComponent(contentSubTitleText, contentSubTitleParams);
  // contentTextDescription
  const description = createComponent(
    contentTextDescription,
    contentTextDescriptionParams
  );

  return title + subTitle + description;
};

const contentSectionTwo = () => {
  // All Recipe
  var imagesAll = contentRecipeParams.map((params) => {
    return createComponent(recipeComponent, params);
  });
  // All contentTableWitchTwoRecipe
  const images = createComponent(recipeRowBlock, imagesAll);
  // Button
  const contentButtonRes = createComponent(
    buttonComponent,
    contentButtonParams
  );
  const buttonRes = createComponent(contentButtonBlock, contentButtonRes);

  return images + buttonRes;
};

var result = null;
try {
  // Line block
  const line = createComponent(emptyBlock);

  const allContentRes = contentSectionOne() + contentSectionTwo() + line;
  result = createComponent(contentComponent, allContentRes);
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */

export default result;
