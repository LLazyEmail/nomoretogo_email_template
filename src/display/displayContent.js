import StaticComponent from '../components/StaticContentComponent';

import recipesSectionComponent from '../components/recipesSectionComponent';

import { recipes } from '../config';


// Title
const contentTitleTextParams = {
  hrefTitle: 'https://nomoretogo.com/login/',
  // hrefTitle: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/logo.jpeg',
  
  idTitle: 'logoBlock-4',
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


// console.log(recipes);

var result = null;
try {




  result = StaticComponent({
    contentTitleTextParams,
    contentSubTitleParams,
    contentTextDescriptionParams,


    
    recipes,
    // contentRecipeParams
 
    contentButtonParams,


  });






  console.log(result);



} catch (error) {
  console.log(error.message);
}

export default result;
