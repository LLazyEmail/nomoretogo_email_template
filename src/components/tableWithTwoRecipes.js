// Create tableWithTwoRecipes

// Error
const ERROR_TABLE_WITCH_TWO_RECIPES = `No ${variable} in table two recipes`;

// Config file
import { pathToImages } from "../config.js";

// Component image start
const getImage = (id, href, src) => {
  const srcPath = pathToImages + src;
  return `<a href="${href}" data-link-id="${id}" target="_self">
<img src="${srcPath}" border="0" alt="" width="267" style="display: block;">
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

// Checking for errors start
function createError(variable) {
  throw new Error(ERROR_TABLE_WITCH_TWO_RECIPES);
}
// Checking for errors end

export default (dataImageOne, dataImageTwo) => {
  const { id, href, src } = dataImageOne;
  const { id2, href2, src2 } = dataImageTwo;

  if (!id) {
    createError("id");
  }
  if (!href) {
    createError("href");
  }
  if (!src) {
    createError("src");
  }
  if (!id2) {
    createError("id2");
  }
  if (!href2) {
    createError("href2");
  }
  if (!src2) {
    createError("src2");
  }

  // old version start
  //id, href, src, id2, href2, src2
  // const data_array = [
  //   { data: id, key: "id" },
  //   { data: href, key: "href" },
  //   { data: src, key: "src" },
  //   { data: id2, key: "id2" },
  //   { data: href2, key: "href2" },
  //   { data: src2, key: "src2" },
  // ];

  // data_array.forEach((item) => {
  //   if (item.data == "") {
  //     throw new Error("No " + item.key + " TableWitchTwoRecipes");
  //   }
  // });
  // old version end

  return mainTableWitchTwoRecipes(id, href, src, id2, href2, src2);
};
