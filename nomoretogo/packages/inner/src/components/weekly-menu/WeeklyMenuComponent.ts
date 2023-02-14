import {
  buttonComponent,
  separatorComponent,
} from 'typo';

import weeklyMenuButtonBlock from './WeeklyMenuButtonBlock';

import recipesContainerComponent from '../recipe';



// TODO update this component. we can use TEXT and RecipesSection as separate parts
const WeeklyMenuComponent = (recipes, button) => {

    // weekly menu button
    const buttonHTML = buttonComponent(button);
  
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

export default WeeklyMenuComponent;