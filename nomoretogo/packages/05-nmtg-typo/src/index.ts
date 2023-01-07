import buttonComponentOld from './components/button';
import heading from './components/heading';

// import strong from './components/strong';
import { renderSubHeading, spanHeadingBlock } from './components/subheading';
//--------
// import paragraphComponent from './components/paragraph';
// import linkComponent from './components/link';

import separatorComponent from './components/separator';

// import {
//     // imageComponent,
//     imgWrapper
// } from './components/image';


buttonComponentOld({id: '12', href: 'google.com', text: 'GoooGLE link'});

console.log(buttonComponentOld);


export { 
    buttonComponentOld, 
    heading,  
    // strong, 
    renderSubHeading,
    spanHeadingBlock,
    //------
    // imageComponent,
    // imgWrapper,
    // paragraphComponent,
    // linkComponent,
    separatorComponent
};
