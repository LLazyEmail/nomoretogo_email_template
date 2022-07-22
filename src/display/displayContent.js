// import contentComponent from '../components/contentComponent';


// // title
// const idtitle = '123';
// const hrefTitle = '123';
// const textTitle = '123';


// // sub title
// const subTitle = '123';

// // text description
// const textTop = '123';
// const textBottom = '123';


// // Recipe one
// const dataImageOne = {
//   id: '123',
//   href: '123',
//   src: '123',
//   title: '123',
//   text: '123',
// };


// // Recipe two
// const dataImageTwo = {
//   id: '123',
//   href: '123',
//   src: '123',
//   title: '123',
//   text: '123',
// };


// // Button
// const id = '123';
// const href = '123';
// const text = '123';



// try {
//   var fullComponent = contentComponent(
//     idtitle,
//     hrefTitle,
//     textTitle,
//     subTitle,
//     textTop,
//     textBottom,
//     dataImageOne,
//     dataImageTwo,
//     id,
//     href,
//     text
//   );
// } catch (err) {
//   var error = err;
// }


import contentComponent from '../components/contentComponent';
import createComponent from './createComponentUniversal';

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
const contentTextDescriptionParams = { textTop: '123', textBottom: '123' };

// Recipe
const contentRecipeParams = [
  {
    id: '1',
    href: '123',
    src: '123',
    title: '123',
    text: '123',
  },
  {
    id: '2',
    href: '123',
    src: '123',
    title: '123',
    text: '123',
  },
  {
    id: '3',
    href: '123',
    src: '123',
    title: '123',
    text: '123',
  },
  {
    id: '4',
    href: '123',
    src: '123',
    title: '123',
    text: '123',
  },
  {
    id: '5',
    href: '123',
    src: '123',
    title: '123',
    text: '123',
  },
];

// Button
const contentButtonParams = { id: '123', href: '123', text: 123 };
/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  // contentTitleText
  const title = createComponent(contentTitleText, contentTitleTextParams);

  // contentSubTitleText
  const subTitle = createComponent(contentSubTitleText, contentSubTitleParams);

  // contentTextDescription
  const description = createComponent(
    contentTextDescription,
    contentTextDescriptionParams
  );

  // All Recipe
  var imagesAll = contentRecipeParams.map((params) => {
    return createComponent(contentRecipe, params);
  });

  // All contentTableWitchTwoRecipe
  const images = createComponent(contentTableWithTwoRecipes, imagesAll);

  // Button
  const contentButtonRes = createComponent(contentButton, contentButtonParams);
  const button = createComponent(contentButtonBlock, contentButtonRes);

  // Line block
  const line = createComponent(lineBlock);

  const allContentRes = `${title}${subTitle}${description}${images}${button}${line}`;

  result = createComponent(contentComponent, allContentRes);
} catch (e) {
  console.log(e.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
