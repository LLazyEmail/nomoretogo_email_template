// create content main table wrap
// TODO looks like an issue, because we will need to 
// import components from the outer template into the inner template
import topPanelViewInBrows from "../../../../src/domain/outer/topPanelViewInBrows";

import tableHeaderBlockLogo from "../../../../src/domain/outer/tableHeaderBlockLogo";

// Block main table content (wrap) start
const contentMainTableWrap = (idViewInBrows, hrefViewInBrows) => {
  return `<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f6f8f9" class="mainTable mlBodyBackground" dir="ltr" background="https://preview.mailerlite.com/r0n8w0g0n6/1934358861754405982/l8n5/">
    <tbody><tr>
      <td class="mlTemplateContainer" align="center">
      <!--<![endif]-->
      <!--[if mso 16]>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
          <tr>
            <td bgcolor="#f6f8f9" align="center">
            <!--<![endif]-->
            <!-- Content starts here -->
            <!-- BORDER RADIUS FOR CARDS LAYOUT -->
            <!-- BORDER RADIUS FOR DEFAULT LAYOUT -->
            <!-- Block top panel start -->
            ${topPanelViewInBrows(idViewInBrows, hrefViewInBrows)}
            <!-- Block top panel end -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="mlContentTable  mlContentBorderRadius" width="640" style="border-radius: 5px; overflow: hidden;">
              <tbody><tr>
                <td>
                  <!-- Block header/logotip start -->
                  ${tableHeaderBlockLogo()}
                  <!-- Block header/logotip end -->
                </td>
              </tr>
            </tbody></table>
            <!-- Content ends here -->
            <!--[if mso 16]>
            </td>
          </tr>
        </table>
      <!--<![endif]-->
      <!--[if !mso]>
        <!-- -->
      </td>
    </tr>
    </tbody></table>`;
};
// Block main table content (wrap) end

// Block error start
var searchError = (err) => {
  const error = {
    hrefViewInBrows: "No hrefViewInBrows contentMainTableWrap",
    srcImageLogo: "No srcImageLogo contentMainTableWrap",
  };

  throw new Error(error[err]);
};
// Block error end

export default function (idViewInBrows, hrefViewInBrows) {
  if (idViewInBrows == "") {
    searchError("idViewInBrows");
  }
  if (hrefViewInBrows == "") {
    searchError("hrefViewInBrows");
  }

  return contentMainTableWrap(idViewInBrows, hrefViewInBrows);
}
