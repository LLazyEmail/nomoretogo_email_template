// Create panel view in brows

import viewInBrowserLink from "../miscellaneous/view-in-browser-link.js";

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
              ${viewInBrowserLink(idViewInBrows, hrefViewInBrows)}
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

export default function (idViewInBrows, hrefViewInBrows) {
  if (idViewInBrows == "") {
    throw new Error("No idViewInBrows topPanelViewInBrows");
  }
  if (hrefViewInBrows == "") {
    throw new Error("No hrefViewInBrows topPanelViewInBrows");
  }

  return topPanelViewInBrows(idViewInBrows, hrefViewInBrows);
}
