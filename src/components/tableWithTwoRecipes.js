// Component image start
// Config file
import { config } from "../config.js";

const getImage = (id, href, src) => {
  return `<a href="${href}" data-link-id="${id}" target="_self">
<img src="${
    config.pathImages + src
  }" border="0" alt="" width="267" style="display: block;">
</a>`;
};
// Component image end

// Main table start
const mainTableWitchTwoRecipes = (id, href, src, id2, href2, src2) => {
  return `<table role="presentation" cellpadding="0" border="0" align="center" width="100%">
    <tbody><tr>
      <td valign="top">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
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
                  <td align="left" class="bodyTitle" id="bodyText-26" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
                    <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"><strong><span style="font-size: 16px;">Chipotle Cream Skillet Chicken </span></strong><br>over Rice and Snap Peas<br></p>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody></table>
        <!--[if mso]>
      </td>
      <td valign="top">
      <![endif]-->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" width="267" class="mlContentTable" style="width: 267px; min-width: 267px;">
        <tbody><tr>
          <td id="imageBlock-27" align="center">
            ${getImage(id2, href2, src2)}
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 0px 20px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
              <tbody><tr>
                <td height="20" class="spacingHeight-20"></td>
              </tr>
              <tr>
                <td align="left" class="bodyTitle" id="bodyText-27" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
                  <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"><strong><span style="font-size: 16px;">Bahn Mi Meatball Skewers</span></strong></p>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
      </td>
    </tr>
    </tbody></table>`;
};
// Main table end

// Block error start
var searchError = (err) => {
  const error = {
    id: "No id TableWitchTwoRecipes",
    id2: "No id2 TableWitchTwoRecipes",
    href: "No href TableWitchTwoRecipes",
    href2: "No href2 TableWitchTwoRecipes",
    src: "No src TableWitchTwoRecipes",
    src2: "No src2 TableWitchTwoRecipes",
  };

  throw new Error(error[err]);
};
// Block error end

export default (id, href, src, id2, href2, src2) => {
  if (id == "") {
    searchError("id");
  }
  if (id2 == "") {
    searchError("id2");
  }
  if (href == "") {
    searchError("href");
  }
  if (href2 == "") {
    searchError("href2");
  }
  if (src == "") {
    searchError("src");
  }
  if (src2 == "") {
    searchError("src2");
  }

  return mainTableWitchTwoRecipes(id, href, src, id2, href2, src2);
};
