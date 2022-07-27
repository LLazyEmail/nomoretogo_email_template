// Create head component
import Errors from './Errors';

const footerError = new Errors('footerComponent');

// Create head component start
function createHeadComponent(params) {
  var {
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
    ${blobHead}
  </head>`;
}
// Create head component end

// we are throwing an error with the same constant 10 times.
function searchForErrors(params) {
  const error = new Errors('headComponent');
  var {
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
    footerError.add('blobHead');
  }
  if (bodyStyle == '') {
    footerError.add('bodyStyle');
  }
  if (mediaStyle == '') {
    footerError.add('mediaStyle');
  }
  if (style == '') {
    footerError.add('style');
  }
  if (style2 == '') {
    footerError.add('style2');
  }
  if (font1 == '') {
    footerError.add('font1');
  }
  if (font2 == '') {
    footerError.add('font2');
  }
  if (meta == '') {
    footerError.add('meta');
  }
  if (ifStyle == '') {
    footerError.add('ifStyle');
  }
  if (title == '') {
    footerError.add('title');
  }
}

// TODO I dont think we need to return this function. fill find a comment to it later

const headComponent = (subComponent) => {
  searchForErrors(subComponent);
  return createHeadComponent(subComponent);
};

export default headComponent;
