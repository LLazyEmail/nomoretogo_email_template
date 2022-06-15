// Create view-in-brows component

// Top panel start
const topPanelViewInBrows = (idViewInBrows, hrefViewInBrows) => {
  return `<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mobileHide">
  <tbody><tr>
    <td align="center">
      <table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
        <tbody><tr>
          <td colspan="2" height="20"></td>
        </tr>
        <tr>
          <td align="left" style="font-family: 'Poppins', sans-serif; color: #111111; font-size: 12px; line-height: 18px;"></td>
          <td align="right" style="font-family: 'Poppins', sans-serif; color: #111111; font-size: 12px; line-height: 18px;">
            <a style="color: #111111;" href="${hrefViewInBrows}" data-link-id="${idViewInBrows}" target="_blank">View in browser</a>
          </td>
        </tr>
        <tr>
          <td colspan="2" height="20"></td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  </tbody></table>`;
};
// Top panel end

// Block header/logotip start
const headerBlockLogo = (srcImageLogo) => {
  const pathImage = `../../images/`;
  return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                    <tbody><tr>
                      <td align="center">
                        <img src="${
                          pathImage + srcImageLogo
                        }" id="logoBlock-4" border="0" alt="" width="560" style="display: block;">
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="10" class="spacingHeight-10" style="line-height: 10px; min-height: 10px;"></td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  </tbody></table>`;
};
// Block header/logotip end

// Block main table content (wrap) start
const contentMainTableWrap = (idViewInBrows, hrefViewInBrows, srcImageLogo) => {
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
                ${headerBlockLogo(srcImageLogo)}
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
    idViewInBrows: "No idViewInBrows view-in-browser-link",
    hrefViewInBrows: "No hrefViewInBrows view-in-browser-link",
    srcImageLogo: "No srcImageLogo view-in-browser-link",
  };

  throw new Error(error[err]);
};
// Block error end

export default function (idViewInBrows, hrefViewInBrows, srcImageLogo) {
  if (idViewInBrows == "") {
    searchError("idViewInBrows");
  }
  if (hrefViewInBrows == "") {
    searchError("hrefViewInBrows");
  }
  if (srcImageLogo == "") {
    searchError("srcImageLogo");
  }

  contentMainTableWrap(idViewInBrows, hrefViewInBrows, srcImageLogo);
}

////// old version ///////////////////////////////////////////////////////////////////////////
// var hrefViewInBrows = (id, href) => {
//   return `<a style="color: #111111;" href="${href}" data-link-id="${id}" target="_blank">View in browser</a>`;
// };

// var topPanel = (href) => {
//   return `<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mobileHide">
//   <tbody><tr>
//     <td align="center">
//       <table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//         <tbody><tr>
//           <td colspan="2" height="20"></td>
//         </tr>
//         <tr>
//           <td align="left" style="font-family: 'Poppins', sans-serif; color: #111111; font-size: 12px; line-height: 18px;"></td>
//           <td align="right" style="font-family: 'Poppins', sans-serif; color: #111111; font-size: 12px; line-height: 18px;">
//             ${hrefViewInBrows(id, href)}
//           </td>
//         </tr>
//         <tr>
//           <td colspan="2" height="20"></td>
//         </tr>
//       </tbody></table>
//     </td>
//   </tr>
//   </tbody></table>`;
// };

// export default function (id, href) {
//   if (href == "") {
//     throw new Error("No href view-in-brows");
//   }

//   topPanel(id, href);
// }
