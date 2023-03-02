import { 
  separatorComponent
} from 'nmtg-template-mailerlite-typography';

import contentContainer from '../content/container';

import { 
  WeeklyMenuContainerComponent, instructionContainerStatic 
} from 'nmtg-template-layout-weekly';

const StaticContentComponent = (params: {titleVar:string, subtitleVar:string, descriptionVar:string, recipes:any, buttonParams:any}) => {
  // destructure params
  const {
    titleVar,
    subtitleVar,
    descriptionVar,
    // contentRecipeParams,

    // dataImage,
    // contentButtonParams,

    recipes,
    buttonParams
  } = params;

  
  // block 1
  const text = contentContainer({
    titleVar, subtitleVar, descriptionVar
  })

  // const text = '<!--  TEXT -->';



  // block 2
  const weeklyHTML = WeeklyMenuContainerComponent(recipes, buttonParams);
  const separator = separatorComponent();


  const contentAndAfter = weeklyHTML +  separator;


  const instrHTML = instructionContainerStatic();
  console.log(instrHTML);

  // All content
  const allContent = text + contentAndAfter + instrHTML;
  return allContent;
  
};
  
  export default StaticContentComponent;

  