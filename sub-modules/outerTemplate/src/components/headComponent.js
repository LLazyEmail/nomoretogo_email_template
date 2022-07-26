// Create head component
import Errors from './Errors';

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
    error.add('blobHead');
  }
  if (bodyStyle == '') {
    error.add('bodyStyle');
  }
  if (mediaStyle == '') {
    error.add('mediaStyle');
  }
  if (style == '') {
    error.add('style');
  }
  if (style2 == '') {
    error.add('style2');
  }
  if (font1 == '') {
    error.add('font1');
  }
  if (font2 == '') {
    error.add('font2');
  }
  if (meta == '') {
    error.add('meta');
  }
  if (ifStyle == '') {
    error.add('ifStyle');
  }
  if (title == '') {
    error.add('title');
  }
}

// TODO I dont think we need to return this function. fill find a comment to it later

export default function (subComponent) {
  searchForErrors(subComponent);
  return createHeadComponent(subComponent);
}
