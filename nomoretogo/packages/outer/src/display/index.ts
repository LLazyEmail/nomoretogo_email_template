// Footer 

import { footerComponent, amazonFreshBlock, supportComponent } from 'outer';

// import { SocialPanelComponent } from 'nmtg-template-mailerlite-inner'; 

import { separatorComponent } from 'nmtg-typo';
import Factory from './factory';
import createComponent from './createComponentUniversal';

import { footerData, unsubscribe } from '../config';


const { socialsLinksParams, imagePath, title, params } = footerData;




/* ******************** CREATE CONTENT START ****************************** */
var result = null;
var footerHTMLString = false;


  // first block
  const amazonFreshBlockHTML = createComponent( amazonFreshBlock, imagePath );
  
  // second block
  const factory = new Factory(supportComponent, params);
  const supportBlock = factory.create();

  // third block

  const socialPanel = ' xxxx social panel ';
  // const socialPanel = createComponent(SocialPanelComponent, socialsLinksParams) ;

  
  const settings = {
    unsubscribe,
    socialPanel,
     title,
  }



  // footerHTML = 
  // const line = supportBlock +
  // amazonFreshBlock + separatorComponent() + 

  
  // footerHTML(settings) ;

  footerHTMLString = createComponent(footerComponent, settings);



  result = 
    supportBlock +
    amazonFreshBlockHTML + 
    separatorComponent() + 
    footerHTMLString;

  // console.log(result);


// HEAD

// Create head component
import Errors from '../Errors';

// TODO it looks strange
const headError = new Errors('headComponent');

function createHeadComponent(params:any) {
  
  const {
    blobHead,
    bodyStyle,
    font1,
    font2,
    meta,
    ifStyle,
    mediaStyle,
    style,
    style2,
    title,
  } = params;

  return `<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <!--[if !mso]><!--><!--[if gte mso 9]><xml><o:OfficeDocumentsettings><o:AllowPNG/><o:PixelsPerInch>96<o:PixelsPerInch></o:OfficeDocumentsettings></xml><![endif]--><!--<![endif]-->
    ${meta}
    ${font1}
    ${ifStyle}
    ${style}
    ${bodyStyle}
    ${mediaStyle}
    <title>${title}</title>
    <meta name="robots" content="noindex, nofollow">
    ${style2}
    ${font2}
  </head>`;
  // ${blobHead}
}


// TODO migrate some errors away 
// we are throwing an error with the same constant 10 times.
function searchForErrors(params:any) {
  // const error = new Errors('headComponent');
  const {
    blobHead,
    bodyStyle,
    font1,
    font2,
    meta,
    ifStyle,
    mediaStyle,
    style,
    style2,
    title,
  } = params;

  if (blobHead == '') {
    headError.add('blobHead');
  }
  if (bodyStyle == '') {
    headError.add('bodyStyle');
  }
  if (mediaStyle == '') {
    headError.add('mediaStyle');
  }
  if (style == '') {
    headError.add('style');
  }
  if (style2 == '') {
    headError.add('style2');
  }
  if (font1 == '') {
    headError.add('font1');
  }
  if (font2 == '') {
    headError.add('font2');
  }
  if (meta == '') {
    headError.add('meta');
  }
  if (ifStyle == '') {
    headError.add('ifStyle');
  }
  if (title == '') {
    headError.add('title');
  }
}

// headComponent 


// const headComponent = (subComponent:string) => {
//   searchForErrors(subComponent);
//   return createHeadComponent(subComponent);
// };

// export default headComponent;


// Body

import { bodyComponent } from 'outer';

import createComponent from './createComponentUniversal';




import displayContentMainTableWrap from './displayContentMainTableWrap';

import displayContentHTML from './displayContent';
import displayInstruction from './displayInstruction';



/* ******************** DATA START **************************************** */
// Body params

// const displayContentMainTableWrap = 'xxx';
// const displayContentHTML = "xxx";

const bodyComponentParams = `
${displayContentMainTableWrap}
${displayContentHTML}
${displayInstruction}
`;
/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
// try {
  // contentTitleText
  const bodyComponentRes = createComponent(
    bodyComponent, 
    bodyComponentParams
  );

  result = bodyComponentRes;
  
  // console.log(result);
