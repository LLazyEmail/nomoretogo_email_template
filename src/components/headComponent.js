// Create head component
import blobHead from "../outerTemplate/blobHead.js";
import bodyStyle from "../outerTemplate/bodyStyle.js";
import mediaStyle from "../outerTemplate/mediaStyle.js";
import style from "../outerTemplate/style.js";
import style2 from "../outerTemplate/style2.js";
import font1 from "../outerTemplate/font1.js";
import font2 from "../outerTemplate/font2.js";
import meta from "../outerTemplate/headMetaTags";
import ifStyle from "../outerTemplate/ifStyle.js";

export default function (title) {
  if (title == "") {
    throw new Error("No title");
  }

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
