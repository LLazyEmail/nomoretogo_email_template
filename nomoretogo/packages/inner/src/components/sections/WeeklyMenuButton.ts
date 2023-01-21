import {
  buttonComponent,
  separatorComponent,
} from 'typo';

// TODO move Weekly menu button section into sub-components
const contentSubComponent = (text, recipeRowBlockRes, contentButtonParams) => {

    // weekly menu button
    const buttonHTML = buttonComponent(contentButtonParams);
  
    const contentButtonBlockHTML = contentButtonBlock(buttonHTML);
    
    const separatorHTML = separatorComponent();
    // All content
    const allContent = 
        text +
        recipeRowBlockRes + 
        contentButtonBlockHTML + 
        separatorHTML;
  
    return allContent;
  
  }
