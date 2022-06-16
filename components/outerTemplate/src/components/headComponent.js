// Create head component
import blobHead from "./blobHead.js";
import bodyStyle from "./bodyStyle.js";
import mediaStyle from "./mediaStyle.js";
import style from "./style.js";
import style2 from "./style2.js";
import font1 from "./font1.js";
import font2 from "./font2.js";
import meta from "./headMetaTags";
import ifStyle from "./ifStyle.js";

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
