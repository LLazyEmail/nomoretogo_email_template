// Component content discription
import Errors from './Errors';

const textDescriptionMainBlock = (textTop, textBottom) => {
  return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="10" class="spacingHeight-10" style="line-height: 10px; min-height: 10px;"></td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                    <tbody><tr>
                      <td class="bodyTitle" id="bodyText-10" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">
                          ${textTop}
                        </p>  
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><br>
                          ${textBottom}
                        </p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%;"></p>
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

export default function (params) {
  const { textTop, textBottom } = params;
  const error = new Errors('contentTextDescription');

  if (textTop == '') {
    error.add('No textTop');
  }

  if (textBottom == '') {
    error.add('No textBottom');
  }

  return textDescriptionMainBlock(textTop, textBottom);
}
