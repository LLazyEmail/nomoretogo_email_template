import { SupportContainerComponent } from 'inner';

import { imagePath, footerData } from '../config';

// const imagePath = 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/amazon.png';
// const settings = {
//     topTitle,
//     topLinkHref,
//     topLinkId,
//     topLinkText,
//     bottomTitle,
//     bottomLinkHref,
//     bottomLinkId,
//     bottomLinkText,
//     bottomTextContact,
// }

const { params } = footerData;

const supportHTMLString =  SupportContainerComponent(params, imagePath); 

console.log(supportHTMLString);

export default supportHTMLString;