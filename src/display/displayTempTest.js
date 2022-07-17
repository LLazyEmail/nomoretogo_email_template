import createComponent from './createCopmonentUniversal';

import {
  contentButton,
  contentButtonBlock,
  contentRecipe,
  contentSubTitleText,
  contentTableWithTwoRecipes,
  contentTextDescription,
  contentTitleText,
  lineBlock,
} from 'nmtg-template-mailerlite-inner';

// Title
const contentTitleTextParams = {
  hrefTitle: '123',
  idTitle: '123',
  textTitle: '123',
};

// Sub title
const contentSubTitleParams = '123';

// Description
const contentTextDescriptionParams = { textTop: '123', textBottom: '123' };

// Recipe
const contentRecipeParams = {
  id: '123',
  href: '123',
  src: '123',
  title: '123',
  text: '123',
};

// Recipe 2
const contentRecipeParams2 = {
  id: '123',
  href: '123',
  src: '123',
  title: '123',
  text: '123',
};

// Button
const contentButtonParams = { id: '123', href: '123', text: 123 };

var result = '';
try {
  // contentTitleText
  result += createComponent(contentTitleText, contentTitleTextParams);

  // contentSubTitleText
  result += createComponent(contentSubTitleText, contentSubTitleParams);

  // contentTextDescription
  result += createComponent(
    contentTextDescription,
    contentTextDescriptionParams
  );

  // contentTableWitchTwoRecipe and __Recipe
  var image = createComponent(contentRecipe, contentRecipeParams);
  var image2 = createComponent(contentRecipe, contentRecipeParams2);
  result += createComponent(contentTableWithTwoRecipes, { image, image2 });

  // Button
  var contentButtonRes = createComponent(contentButton, contentButtonParams);
  result += createComponent(contentButtonBlock, contentButtonRes);

  // Line block
  result += createComponent(lineBlock);
} catch (e) {
  console.log(e.message);
}

////////////////// OLD START ///////////////////////////////
// var error = '';
// var result = null;
// try {
//   var params = {
//     id: '123',
//     href: '123',
//     text: '123',
//   };

//   const factory = new Factory(contentButtonBlock, params);
//   result = factory.create();
// } catch (e) {
//   error = e.message;
// }

// if (error != '') {
//   console.log(error);
// }
////////////////// OLD END ///////////////////////////////

export default result;
