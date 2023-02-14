import { 
  separatorComponent, 
  buttonComponent 
} from 'nmtg-typo' ;

import recipeComponent from '../recipe/recipe';
import subtitle from '../content/subtitle';
import recipeRowBlock from '../recipe/row';

import textDescriptionMainBlock from '../content/description';
import titleTextMainBlock from '../content/title';
import buttonBlock from '../weekly-menu/WeeklyMenuButtonBlock';



import instructionContainerStatic from '../instruction/containerStatic';



  const StaticComponent = (params) => {
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
    const contentTitleTextRes = '<!--  contentTitleTextRes -->';
    // const contentTitleTextRes = titleTextMainBlock(contentTitleTextParams);

    // const contentSubTitleTextRes = subtitle(contentSubTitleParams);

    // const contentTextDescriptionRes = textDescriptionMainBlock(
    //   contentTextDescriptionParams
    // );

    // const text =
    //   contentTitleTextRes + contentSubTitleTextRes + contentTextDescriptionRes;
  
    // block 2
    var imagesAll = contentRecipeParams.map((params) => {
      return recipeComponent(params);
    });
    const imageOne = dataImage[0];
    const imageTwo = dataImage[1];
  
    const recipeRowBlockRes = recipeRowBlock(imageOne, imageTwo);
  
    const buttonComponentRes = buttonComponent(contentButtonParams);
    const contentButtonBlockRes = buttonBlock(buttonComponentRes);

    const separator = separatorComponent();
    const contentAndAfter = recipeRowBlockRes + contentButtonBlockRes + separator;
  

    // All content
    const allContent = text + contentAndAfter;
    return allContent;
    
  };
  
  export default StaticComponent;

  