// Create head component
// import Errors from './Errors';
// import ow from 'ow';

import { pre_tags, post_tags } from './head/tags';
// TODO it looks strange
// const headError = new Errors('headComponent');

function createHeadComponent(params:any) {
  
  const {
    blobHead,
    // bodyStyle,
    // font1,
    // font2,
    // meta,
    // ifStyle,
    // mediaStyle,
    // style,
    // style2,
    //------
    title,
  } = params;

  return `<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <!--[if !mso]><!--><!--[if gte mso 9]><xml><o:OfficeDocumentsettings><o:AllowPNG/><o:PixelsPerInch>96<o:PixelsPerInch></o:OfficeDocumentsettings></xml><![endif]--><!--<![endif]-->
    ${pre_tags()}
    <title>${title}</title>
    <meta name="robots" content="noindex, nofollow">
    ${post_tags()}
  </head>`;
  // ${blobHead}
}


// TODO replace with ow and simplify this logic
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

  // if (blobHead == '') {
  //   headError.add('blobHead');
  // }
  // if (bodyStyle == '') {
  //   headError.add('bodyStyle');
  // }
  // if (mediaStyle == '') {
  //   headError.add('mediaStyle');
  // }
  // if (style == '') {
  //   headError.add('style');
  // }
  // if (style2 == '') {
  //   headError.add('style2');
  // }
  // if (font1 == '') {
  //   headError.add('font1');
  // }
  // if (font2 == '') {
  //   headError.add('font2');
  // }
  // if (meta == '') {
  //   headError.add('meta');
  // }
  // if (ifStyle == '') {
  //   headError.add('ifStyle');
  // }
  // if (title == '') {
  //   headError.add('title');
  // }


  
}


const headComponent = (subComponent:string) => {
  searchForErrors(subComponent);
  return createHeadComponent(subComponent);
};

export default headComponent;


// return `<head>
// <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
//   <!--[if !mso]><!--><!--[if gte mso 9]><xml><o:OfficeDocumentsettings><o:AllowPNG/><o:PixelsPerInch>96<o:PixelsPerInch></o:OfficeDocumentsettings></xml><![endif]--><!--<![endif]-->
//   ${meta}
//   ${font1}
//   ${ifStyle}
//   ${style}
//   ${bodyStyle}
//   ${mediaStyle}
//   <title>${title}</title>
//   <meta name="robots" content="noindex, nofollow">
//   ${style2}
//   ${font2}
// </head>`;