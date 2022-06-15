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
  return (
    `<a href="${href}" data-link-id="${id}" target="_self"><img src="` +
    pathImages +
    src +
    `" border="0" alt="" width="267" style="display: block;"></a>`
  );
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

// Search error start
const searchError = (err) => {
  const error = {
    id: "No id imageTitleText",
    href: "No href imageTitleText",
    src: "No src imageTitleText",
    title: "No title imageTitleText",
    text: "No text imageTitleText",
  };
  throw new Error(error[err]);
};
// Search error end

export default function (id, href, src, title, text) {
  if (id == "") {
    searchError("id");
  }
  if (href == "") {
    searchError("href");
  }
  if (src == "") {
    searchError("src");
  }
  if (title == "") {
    searchError("title");
  }
  if (text == "") {
    searchError("text");
  }

  return mainBlock(id, href, src, title, text);
}
