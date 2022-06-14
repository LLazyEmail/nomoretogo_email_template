// Create view-in-brows component

var hrefViewInBrows = (href) => {
  return `<a style="color: #111111;" href="${href}" data-link-id="960357273" target="_blank">View in browser</a>`;
};

var topPanel = (href) => {
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
            ${hrefViewInBrows(href)}
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

export default function (href) {
  if (href == "") {
    throw new Error("No href view-in-brows");
  }

  topPanel(href);
}
