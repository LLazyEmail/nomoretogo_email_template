import StaticComponent from '../components/StaticContentComponent';

////////////// VARIANT ONE START ///////////////////////////////////


// /* ******************** CREATE CONTENT START ****************************** */


//   // Line block
//   const line = createComponent(emptyBlock);

//   const allContentRes = contentSectionOne() + contentSectionTwo() + line;

//   result = createComponent(contentComponent, allContentRes);


////////////// VARIANT ONE END /////////////////////////////////////



////////////// VARIANT TWO START ///////////////////////////////////
// import contentRecipeParams from './_recipesData';

import { recipes } from '../config';



// Title
const contentTitleTextParams = {
  hrefTitle: '123 - contentTitleTextParams',
  idTitle: '123 - contentTitleTextParams',
  textTitle: '123 - contentTitleTextParams',
};

// Sub title
const contentSubTitleParams = 'contentSubTitleParams';

// Description
const contentTextDescriptionParams = {
  textTop: 'contentTextDescriptionParams',
  textBottom: 'contentTextDescriptionParams',
};


// TODO rename to Weekly Menu button and move to config file
const contentButtonParams = {
  id: '04-22-2021',
  href: 'https://www.nomoretogo.com/weekly-menu/',
  text: `Get This Week's Menu`,
};

var result = null;
try {




  result = StaticComponent({
    contentTitleTextParams,
    contentSubTitleParams,
    contentTextDescriptionParams,


    recipes: 
      recipes,
    
    // contentRecipeParams
    // dataImage,
    contentButtonParams,






  });


  console.log(result);



} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */

export default result;
////////////// VARIANT TWO END /////////////////////////////////////
