// Create head component
import Errors from './Errors';

// TODO it looks strange
const headError = new Errors('headComponent');

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
    
  </head>`;
  // ${blobHead}
}
// Create head component end

// TODO migrate some errors away 
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


const headComponent = (subComponent) => {
  searchForErrors(subComponent);
  return createHeadComponent(subComponent);
};

export default headComponent;
