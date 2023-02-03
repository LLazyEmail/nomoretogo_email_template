import {
  buttonComponent,
  separatorComponent,
} from 'typo';

import { contentButtonBlock } from '../content';

// TODO import  contentButtonBlock
// contentButtonBlock


// TODO update this component. we can use TEXT and RecipesSection as separate parts
const contentSubComponent = (text, recipeRow, contentButtonParams) => {

    // weekly menu button
    const buttonHTML = buttonComponent(contentButtonParams);
  
    const contentButtonBlockHTML = contentButtonBlock(buttonHTML);
    
    const separatorHTML = separatorComponent();
    // All content
    const allContent = 
        text +
        recipeRow + 
        contentButtonBlockHTML + 
        separatorHTML;
  
    return allContent;
  
}
