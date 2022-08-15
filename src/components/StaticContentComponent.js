// Create wrap component content
import Errors from '../Errors';

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
  emptyBlock,
  test,
} from 'nmtg-template-mailerlite-inner';

import { buttonComponent } from 'nmtg-template-mailerlite-typography';

const mainStaticComponent = (params) => {
  const {
    contentTitleTextParams,
    contentSubTitleParams,
    contentTextDescriptionParams,
    contentRecipeParams,
    dataImage,
  } = params;

  // const contentTitleTextRes = contentTitleText(contentTitleTextParams);
  // const contentSubTitleTextRes = contentSubTitleText(contentSubTitleParams);
  // const contentTextDescriptionRes = contentTextDescription(
  //   contentTextDescriptionParams
  // );
  // const text =
  //   contentTitleTextRes + contentSubTitleTextRes + contentTextDescriptionRes;

  // var imagesAll = contentRecipeParams.map((params) => {
  //   return recipeComponent(params);
  // });
  const imageOne = dataImage[0];
  const imageTwo = dataImage[1];
  console.log(test);
  // const recipeRowBlockRes = recipeRowBlock(imageOne, imageTwo);

  // const buttonComponent = buttonComponent();
  // const contentButtonBlock = contentButtonBlock();

  return 'staticContentCopmonent'; //  recipeRowBlockRes;
};

export default function (params) {
  return mainStaticComponent(params);
}
////////////// VARIANT TWO END /////////////////////////////////////
