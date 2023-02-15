import { SupportContainerComponent } from 'inner';

import { imagePath, footerData } from '../config';

const { params } = footerData;

const supportHTMLString =  SupportContainerComponent(params, imagePath); 

console.log(supportHTMLString);

export default supportHTMLString;