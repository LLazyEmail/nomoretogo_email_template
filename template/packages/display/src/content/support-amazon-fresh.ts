import { SupportContainerComponent } from 'nmtg-template-mailerlite-inner';

import { footerData } from '../config';

const { imagePath, params } = footerData;

const supportHTMLString =  SupportContainerComponent(params, imagePath); 

console.log(supportHTMLString);

export default supportHTMLString;