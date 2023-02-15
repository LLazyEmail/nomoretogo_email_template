import { 
  separatorComponent, 
  buttonComponent 
} from 'nmtg-typo';

import { recipes } from '../../config';



// import recipeRowBlock from '../recipe/row';

import subtitle from '../content/subtitle';
import textDescriptionMainBlock from '../content/description';
import titleTextMainBlock from '../content/title';



import WeeklyMenuContainerComponent from '../weekly-menu/WeeklyMenuComponent';


const buttonParams = {
  id: '04-22-2021',
  href: 'https://www.nomoretogo.com/weekly-menu/',
  text: `Get This Week's Menu`,
};


// import recipeComponent from '../recipe/recipe';
// import buttonBlock from '../weekly-menu/WeeklyMenuButtonBlock';



import instructionContainerStatic from '../instruction/containerStatic';



  const StaticContentComponent = (params) => {
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
    // const contentTitleTextRes = '<!--  contentTitleTextRes -->';
    // const contentTitleTextRes = titleTextMainBlock(contentTitleTextParams);

    // const contentSubTitleTextRes = subtitle(contentSubTitleParams);

    // const contentTextDescriptionRes = textDescriptionMainBlock(
    //   contentTextDescriptionParams
    // );

    // const text =
    //   contentTitleTextRes + contentSubTitleTextRes + contentTextDescriptionRes;
  
    const text = '<!--  TEXT -->';



    // block 2
    // var imagesAll = contentRecipeParams.map((params) => {
    //   return recipeComponent(params);
    // });
    // const imageOne = dataImage[0];
    // const imageTwo = dataImage[1];
  
    // const recipeRowBlockRes = recipeRowBlock(imageOne, imageTwo);
  
    // const buttonComponentRes = buttonComponent(contentButtonParams);
    // const contentButtonBlockRes = buttonBlock(buttonComponentRes);

    const weeklyHTML = WeeklyMenuContainerComponent(recipes, buttonParams);

    const separator = separatorComponent();



    const contentAndAfter = weeklyHTML +  separator;
  

    // All content
    const allContent = text + contentAndAfter;
    return allContent;
    
  };
  
  export default StaticContentComponent;

  