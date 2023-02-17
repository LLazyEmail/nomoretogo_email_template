// TODO remove to container.ts
import {
  // buttonComponent,
  separatorComponent
} from 'nmtg-typo';
import { buttonComponent } from 'typo';

import weeklyMenuButtonBlock from './WeeklyMenuButtonBlock';
import recipesContainerComponent from '../recipe';


// TODO add instructions into weekly menu container
const WeeklyMenuContainerComponent = (recipes, buttonArr) => {

    // weekly menu button
    const buttonHTML = buttonComponent(buttonArr);
    const weeklyMenuButtonHTML = weeklyMenuButtonBlock(buttonHTML);  
    const recipeContainerHTML = recipesContainerComponent(recipes);


    // All content
    const allContent = 

        recipeContainerHTML + 

        weeklyMenuButtonHTML + 
        separatorComponent();
  
    return allContent;
  
}

export default WeeklyMenuContainerComponent;