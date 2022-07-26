// import contentComponent from '../components/contentComponent';

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
const contentTextDescriptionParams = {
  textTop: '123', textBottom: '123'
};



// Recipe
const contentRecipeParams = [
  {
    id: "imageBlock-26",
    href: "https://www.nomoretogo.com/weekly-menu/",
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg"
    //------
    title: '123',
    text: '123',

  },
  {
    id: "imageBlock-21",
    href: "https://www.nomoretogo.com/weekly-menu/",
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe2.jpeg"
    //------
    title: '123',
    text: '123',

  },
  {
    id: "imageBlock-27",
    href: "https://www.nomoretogo.com/weekly-menu/",
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe3.jpeg"
    //------
    title: '123',
    text: '123',

  },
  {
    id: "imageBlock-15",
    href: "https://www.nomoretogo.com/weekly-menu/",
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe4.jpeg"
    //------
    title: '123',
    text: '123',

  },
  {
    id: "imageBlock-14",
    href: "https://www.nomoretogo.com/weekly-menu/",
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe5.jpeg"
    //------
    title: '123',
    text: '123',

  },
  {
    id: "imageBlock-20",
    href: "https://www.nomoretogo.com/weekly-menu/",
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe6.jpeg"
    //------
    title: '123',
    text: '123',

  },
];


// Button
// https://www.nomoretogo.com/weekly-menu/
const contentButtonParams = {
  id: '123',
  href: '123',
  text: '123'
};
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
