// Create head component

// import ow from 'ow';

import { pre_tags, post_tags } from './head/tags';
// TODO it looks strange
// const headError = new Errors('headComponent');

function headComponent(params:any) {
  
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


// TODO migrate some errors away 
// we are throwing an error with the same constant 10 times.
// function searchForErrors(params:any) {
//   // const error = new Errors('headComponent');
//   const {
//     blobHead,
//     bodyStyle,
//     font1,
//     font2,
//     meta,
//     ifStyle,
//     mediaStyle,
//     style,
//     style2,
//     title,
//   } = params;

//   ow(blobHead, ow.string.not.empty);
//   ow(bodyStyle, ow.string.not.empty);

//   ow(mediaStyle, ow.string.not.empty);
  
//   ow(style, ow.string.not.empty);
//   ow(style2, ow.string.not.empty);

//   ow(font1, ow.string.not.empty);
//   ow(font2, ow.string.not.empty);
  
//   ow(meta, ow.string.not.empty);
  
//   ow(ifStyle, ow.string.not.empty);
//   ow(title, ow.string.not.empty);

// }


// const headComponent = (subComponent:string) => {
//   searchForErrors(subComponent);
//   return createHeadComponent(subComponent);
// };

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