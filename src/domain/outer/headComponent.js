// Create head component
const HEAD_COMPONENT_ERROR = (variable) => `Empty ${variable} in headComponent`;

// TODO let's make this file more clear.
// imports of all variables we'll move outside and our function will just accept an object with all these variables.
// and we need to put more checks and errors here.

// Create head component start
function createHeadComponent(params) {
  var {
    blobHead,
    bodyStyle,
    mediaStyle,
    style,
    style2,
    font1,
    font2,
    meta,
    ifStyle,
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
  var {
    blobHead,
    bodyStyle,
    mediaStyle,
    style,
    style2,
    font1,
    font2,
    meta,
    ifStyle,
    title,
  } = params;

  if (blobHead == '') {
    throw new Error(HEAD_COMPONENT_ERROR('blobHead'));
  }
  if (bodyStyle == '') {
    throw new Error(HEAD_COMPONENT_ERROR('bodyStyle'));
  }
  if (mediaStyle == '') {
    throw new Error(HEAD_COMPONENT_ERROR('mediaStyle'));
  }
  if (style == '') {
    throw new Error(HEAD_COMPONENT_ERROR('style'));
  }
  if (style2 == '') {
    throw new Error(HEAD_COMPONENT_ERROR('style2'));
  }
  if (font1 == '') {
    throw new Error(HEAD_COMPONENT_ERROR('font1'));
  }
  if (font2 == '') {
    throw new Error(HEAD_COMPONENT_ERROR('font2'));
  }
  if (meta == '') {
    throw new Error(HEAD_COMPONENT_ERROR('meta'));
  }
  if (ifStyle == '') {
    throw new Error(HEAD_COMPONENT_ERROR('ifStyle'));
  }
  if (title == '') {
    throw new Error(HEAD_COMPONENT_ERROR('title'));
  }
}

// TODO I dont think we need to return this function. fill find a comment to it later

export default function (subComponent) {
  searchForErrors(subComponent);
  return createHeadComponent(subComponent);
}
