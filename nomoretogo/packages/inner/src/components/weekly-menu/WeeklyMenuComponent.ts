import {
  // buttonComponent,
  separatorComponent
} from 'nmtg-typo';
import { buttonComponent } from 'typo';

import weeklyMenuButtonBlock from './WeeklyMenuButtonBlock';
import recipesContainerComponent from '../recipe';


// TODO update this component. 
// we can use TEXT and RecipesSection as separate parts
const WeeklyMenuContainerComponent = (recipes, buttonArr) => {

    // weekly menu button
    const buttonHTML = buttonComponent(buttonArr);
  
    const weeklyMenuButtonHTML = weeklyMenuButtonBlock(buttonHTML);
    

    const recipeContainerHTML = recipesContainerComponent(recipes);

    // const separatorHTML = separatorComponent();

    // All content
    const allContent = 
        // text +
        recipeContainerHTML + 

        weeklyMenuButtonHTML + 
        separatorComponent();
  
    return allContent;
  
}

export default WeeklyMenuContainerComponent;