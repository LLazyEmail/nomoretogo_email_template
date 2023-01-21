import {
  buttonComponent,
  separatorComponent,
} from 'typo';

// TODO import  contentButtonBlock

// TODO move Weekly menu button section into sub-components
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
