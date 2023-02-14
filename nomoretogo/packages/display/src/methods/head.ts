
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
