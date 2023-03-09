import createComponent from './createComponentUniversal.t-s';

import {
  contentButton,
  contentButtonBlock,
  contentRecipe,
  contentSubTitleText,
  contentTableWithTwoRecipes,
  contentTextDescription,
  contentTitleText,
  instructionTitle,
  instructionText,
  lineBlock,
} from 'nmtg-template-mailerlite-inner';

// import instructionComponent from '../components/instructionComponent';

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

// Instruction title params
const instructionTitleParams = '123';

// Instruction text params
const instructionTextParams = '123';
/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
// var result = null;
// try {


  const displayTemp = () => {
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

  // Instruction title NOT ADD /////////////////////////
  const instructionTitleRes = createComponent(
    instructionTitle,
    instructionTitleParams
  );

  // Instruction text NOT ADD  ////////////////////////////
  const instructionTextRes = createComponent(
    instructionText,
    instructionTextParams
  );

  // var asd = createComponent(instructionComponent);
  // console.log(asd);

  return title + subTitle + description + images + button + line;
  
  }





  // result = `${title}${subTitle}${description}${images}${button}${line}`;

  // console.log(result);




// } catch (error) {
//   console.log(error.message);
// }
/* ******************** CREATE CONTENT END ****************************** */
export default displayTemp;
