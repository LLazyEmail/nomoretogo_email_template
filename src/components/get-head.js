// Create head component
import blobHead from "../miscellaneous/blobHead.js";
import bodyStyle from "../miscellaneous/bodyStyle.js";
import mediaStyle from "../miscellaneous/mediaStyle.js";
import style from "../miscellaneous/style.js";
import style2 from "../miscellaneous/style2.js";
import font1 from "../miscellaneous/font1.js";
import font2 from "../miscellaneous/font2.js";

export default function (title) {
  if (title == "") {
    throw new Error("No title");
  }

  var dataHead = "";
  dataHead += "<head>";
  dataHead +=
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">';
  dataHead +=
    "<!--[if gte mso 9]><xml><o:OfficeDocumentsettings><o:AllowPNG/><o:PixelsPerInch>96<o:PixelsPerInch></o:OfficeDocumentsettings></xml><![endif]-->";

  dataHead +=
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\
    <meta name="format-detection" content="address=no">\
    <meta name="format-detection" content="telephone=no">\
    <meta name="format-detection" content="email=no">\
    <meta name="x-apple-disable-message-reformatting"></meta>';

  dataHead += "<!--[if !mso]><!-->";
  dataHead += font1;
  dataHead += "<!--<![endif]-->";

  dataHead += " <!-- RSS STYLE STARTS -->";
  dataHead +=
    ' <!--[if mso]><style type="text/css">.content-MS .content img { width: 560px; }</style><![endif]-->';
  dataHead += "<!-- WINDOWS 10 HACKS FOR LINK AND BG COLOR -->";
  dataHead +=
    '<!--[if (mso)|(mso 16)]><style type="text/css">.mlContentButton a { text-decoration: none; }<style[endif]--><!--[if !mso]><!-- --><!--<![endif]-->';
  dataHead +=
    '<!--[if (lt mso 16)]><style type="text/css" if="variable.bodyBackgroundImage.value">.mlBodyBackgroundImage { background-image: none; }</style><![endif]-->';
  dataHead += style;

  dataHead += "<!--[if mso]>";
  dataHead += bodyStyle;
  dataHead += "<![endif]-->";

  dataHead += mediaStyle;
  dataHead += "<title>" + title + "</title>";
  dataHead += '<meta name="robots" content="noindex, nofollow">';
  dataHead += style2;
  dataHead += font2;
  dataHead += blobHead;
  dataHead += "</head>";
  return dataHead;
}
