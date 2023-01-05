// create content main table wrap
import Errors from './Errors';

// TODO dont forget to handle view in browser link later. low priority

// Block main table content (wrap) start
const contentMainTableWrap = (topPanel, blockLogo) => {
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
            ${topPanel}
            <!-- Block top panel end -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="mlContentTable  mlContentBorderRadius" width="640" style="border-radius: 5px; overflow: hidden;">
              <tbody><tr>
                <td>
                  <!-- Block header/logotip start -->
                  ${blockLogo}
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

export default function (params) {
  const { topPanel, blockLogo } = params;
  const error = new Errors('contentMainTableWrap');

  if (topPanel == '') {
    error.add('No top panel');
  }
  if (blockLogo == '') {
    error.add('No block logo');
  }

  return contentMainTableWrap(topPanel, blockLogo);
}
