
// HEAD
import ow from 'ow';
// Create head component
// import Errors from '../Errors';

// TODO it looks strange
// const headError = new Errors('headComponent');

function headComponent(params:any) {
  
    searchForErrors(params);

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

  ow(blobHead, ow.string.not.empty);
  ow(bodyStyle, ow.string.not.empty);

  ow(mediaStyle, ow.string.not.empty);
  
  ow(style, ow.string.not.empty);
  ow(style2, ow.string.not.empty);

  ow(font1, ow.string.not.empty);
  ow(font2, ow.string.not.empty);
  
  ow(meta, ow.string.not.empty);
  
  ow(ifStyle, ow.string.not.empty);
  ow(title, ow.string.not.empty);
  
}

// headComponent 


// const headComponent = (subComponent:string) => {
//   searchForErrors(subComponent);
//   return createHeadComponent(subComponent);
// };

// export default headComponent;
