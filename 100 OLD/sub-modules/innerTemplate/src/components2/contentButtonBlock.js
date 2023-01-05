// Content button block
import Errors from './Errors';

const buttonBlockMainBlock = (params) => {
  return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="width: 100%; min-width: 100%;">
                    <tbody><tr>
                      <td align="center">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; min-width: 100%;">
                          <tbody><tr>
                            <td align="center" class="mlContentButton" style="font-family: 'Poppins', sans-serif;">
                              <!--[if mso]>
                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4NSZkPWs2ZjRiMm4=.fp2uJksWnc8Dxp12UlfqnthZ650MszWAT7qo5_IJ0sU" data-link-id="960357285" style="height:53px;v-text-anchor:middle;width:259px;" arcsize="6%" stroke="f" fillcolor="#d6685e">
                                  <w:anchorlock/>
                                  <center>
                                  <![endif]-->
                                  ${params}
                                  <!--[if mso]>
                                  </center>
                                </v:roundrect>
                              <![endif]-->
                            </td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
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
  const error = new Errors('contentButtonBlock');

  if (params == '') {
    error.add('No params/empty params');
  }

  return buttonBlockMainBlock(params);
}
