import { 
  separatorComponent
} from 'nmtg-typo';

import contentContainer from '../content/container';


// import subtitle from '../content/subtitle';
// import textDescriptionMainBlock from '../content/description';
// import titleTextMainBlock from '../content/title';

import WeeklyMenuContainerComponent from '../weekly-menu/WeeklyMenuComponent';

import instructionContainerStatic from '../instruction/containerStatic';


const StaticContentComponent = (params) => {
  // distructure params
  const {
    title,
    subtitle,
    description,
    // contentRecipeParams,

    // dataImage,
    // contentButtonParams,

    recipes,
    buttonParams
  } = params;


  // block 1
  const text = contentContainer({
    title, subtitle, description
  })
  // const text =
  //   contentTitleTextRes + contentSubTitleTextRes + contentTextDescriptionRes;
  // const text = '<!--  TEXT -->';



  // block 2
  const weeklyHTML = WeeklyMenuContainerComponent(recipes, buttonParams);
  const separator = separatorComponent();


  const contentAndAfter = weeklyHTML +  separator;


  const instrHTML = instructionContainerStatic();
  console.log(instrHTML);

  // All content
  const allContent = text + contentAndAfter;
  return allContent;
  
};
  
  export default StaticContentComponent;

  