// TODO remove to container.ts
import {
  // buttonComponent,
  separatorComponent
} from 'nmtg-template-mailerlite-typography';
import { buttonComponent } from 'html-typography-tags';

import weeklyMenuButtonBlock from './WeeklyMenuButtonBlock';
import recipesContainerComponent from '../recipe';


// TODO add instructions into weekly menu container
const WeeklyMenuContainerComponent = (recipes:any, buttonArr:any) => {

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