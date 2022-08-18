// Create wrap component content
// import Errors from '../Errors';

////////////// VARIANT ONE START ///////////////////////////////////
// export default function (content) {
//   const error = new Errors('contentComponent');
//   if (content == '') {
//     error.add('No content');
//   }

//   return `${content}`;
// }
////////////// VARIANT ONE END /////////////////////////////////////

////////////// VARIANT TWO START ///////////////////////////////////
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

const mainStaticComponent = (params) => {
  // distructure params
  const {
    contentTitleTextParams,
    contentSubTitleParams,
    contentTextDescriptionParams,
    contentRecipeParams,
    dataImage,
    contentButtonParams,
  } = params;

  // block 1
  const contentTitleTextRes = contentTitleText(contentTitleTextParams);
  const contentSubTitleTextRes = contentSubTitleText(contentSubTitleParams);
  const contentTextDescriptionRes = contentTextDescription(
    contentTextDescriptionParams
  );
  const text =
    contentTitleTextRes + contentSubTitleTextRes + contentTextDescriptionRes;

  // block 2
  var imagesAll = contentRecipeParams.map((params) => {
    return recipeComponent(params);
  });
  const imageOne = dataImage[0];
  const imageTwo = dataImage[1];

  const recipeRowBlockRes = recipeRowBlock(imageOne, imageTwo);

  const buttonComponentRes = buttonComponent(contentButtonParams);
  const contentButtonBlockRes = contentButtonBlock(buttonComponentRes);
  const separator = separatorComponent();
  const contentAndAfter = recipeRowBlockRes + contentButtonBlockRes + separator;

  // All content
  const allContent = text + contentAndAfter;
  return allContent;
};

export default function (params) {
  return mainStaticComponent(params);
}
////////////// VARIANT TWO END /////////////////////////////////////
