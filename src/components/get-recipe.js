// Create image component

// Config file
import { pathImages } from "../config.js";

// Get title start
const getTitle = (title) => {
  return `<strong>
      <span style="font-size: 16px;">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">
            ${title}
          </font>
        </font>
      </span>
    </strong><br>`;
};
// Get title end

// Get text start
const getText = (text) => {
  return `<font style="vertical-align: inherit;">
  <font style="vertical-align: inherit;">
    ${text}
  </font>
</font><br>`;
};
// Get text end

// Get image start
const getImage = (id, href, src) => {
  const srcPath = pathImages + src;
  return `<a href="${href}" data-link-id="${id}" target="_self"><img src="${srcPath}" border="0" alt="" width="267" style="display: block;"></a>`;
};
// Get image end

//  Get main block start
const mainBlock = (id, href, src, title, text) => {
  `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
<tbody><tr>
  <td id="imageBlock-26" align="center">
   ${getImage(id, href, src)}
  </td>
</tr>
<tr>
  <td align="center" style="padding: 0px 20px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
      <tbody><tr>
        <td height="20" class="spacingHeight-20"></td>
      </tr>
      <tr>
        <td align="left" class="bodyTitle" id="bodyText-26" style="font-family: "Poppins", sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
          <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;">
            ${getTitle(title)}
            ${getText(text)}
          </p>
        </td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table>`;
};
// Get main block end

export default function (id, href, src, title, text) {
  const data_array = [
    { data: id, key: "id" },
    { data: href, key: "href" },
    { data: src, key: "src" },
    { data: title, key: "title" },
    { data: text, key: "text" },
  ];

  data_array.forEach((item) => {
    if (item.data == "") {
      throw new Error("No " + item.key + " recipes");
    }
  });

  return mainBlock(id, href, src, title, text);
}
