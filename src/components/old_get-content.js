import button from './old_get-button.js';
import recipeComponent from './recipeComponent.js';

// Title block start
const titleText = (idTitle, hrefTitle, textTitle) => {
  return `<!--  -->
    <table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
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
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                        <tbody><tr>
                          <td align="center" class="bodyTitle" style="font-family: &#39;Poppins&#39;, sans-serif; font-size: 28px; font-weight: 700; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">
                            <a href="${hrefTitle}" data-link-id="${idTitle}" style="text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;" target="_self">${textTitle}</a>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
        </td>
      </tr>
     </tbody>
    </table>
    <!--  -->`;
};
// Title block end

// Sub title start
const subTitleText = (titleSubText) => {
  return `<!--  -->
    <table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
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
                          <td align="center" class="bodyTitle" style="font-family: &#39;Poppins&#39;, sans-serif; font-size: 19px; font-weight: 400; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">${titleSubText}</td>
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
    </tbody></table>
    <!--  -->`;
};
// Sub title end

// Text block start
const textDescription = (textTop, textBottom) => {
  return `<!--  -->
    <table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
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
                          <td class="bodyTitle" id="bodyText-10" style="font-family: &#39;Poppins&#39;, sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
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
                            <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>${textTop}
                            <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                            <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                            <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><br>${textBottom}</p>
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
    </tbody></table>
    <!--  -->`;
};
// Text block end

// Image block row start
const RowWithTwoRecipes = (
  id,
  href,
  src,
  title,
  text,
  id2,
  href2,
  src2,
  title2,
  text2
) => {
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
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                      <tbody><tr>
                        <td height="20" class="spacingHeight-20"></td>
                      </tr>
                    </tbody></table>
                    <table role="presentation" cellpadding="0" border="0" align="center" width="100%">
                      <tbody><tr>
                        <td valign="top">
                            ${recipeComponent(id, href, src, title, text)}
                          <!--[if mso]>
                        </td>
                        <td valign="top">
                        <![endif]-->
                            ${recipeComponent(id2, href2, src2, title2, text2)}
                        </td>
                </tr>
              </tbody></table>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
                <tbody><tr>
                  <td height="20" class="spacingHeight-20"></td>
                </tr>
              </tbody></table>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
                <tbody><tr>
                  <td align="center" style="padding: 0px 40px;" class="mlContentOuter"></td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody></table>
      </td>
    </tr>
    </tbody></table>`;
};
// Image block row end

// Block button start
const buttonBlock = (btnId, btnHref) => {
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
                                    ${button(btnId, btnHref)}
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
// Block button end

// Content main start
const content = (
  idTitle,
  hrefTitle,
  textTitle,
  titleSubText,
  textTop,
  textBottom,

  // Image data start
  id,
  href,
  src,
  title,
  text,

  id2,
  href2,
  src2,
  title2,
  text2,

  id3,
  href3,
  src3,
  title3,
  text3,

  id4,
  href4,
  src4,
  title4,
  text4,

  id5,
  href5,
  src5,
  title5,
  text5,

  id6,
  href6,
  src6,
  title6,
  text6,
  // Image data end

  btnId,
  btnHref
) => {
  return `<table align="center" border="0" cellpadding="0" cellspacing="0" class="mlContentTable  mlContentBorderRadius" width="640" style="border-radius: 5px; overflow: hidden;">
    <tbody><tr>
        <td>
        <!--  -->
        ${titleText(idTitle, hrefTitle, textTitle)}
        ${subTitleText(titleSubText)}
        ${textDescription(textTop, textBottom)}

        ${RowWithTwoRecipes(
          id,
          href,
          src,
          title,
          text,

          id2,
          href2,
          src2,
          title2,
          text2
        )}

        ${RowWithTwoRecipes(
          id3,
          href3,
          src3,
          title3,
          text3,

          id4,
          href4,
          src4,
          title4,
          text4
        )}

        ${RowWithTwoRecipes(
          id5,
          href5,
          src5,
          title5,
          text5,

          id6,
          href6,
          src6,
          title6,
          text6
        )}
        
        ${buttonBlock(btnId, btnHref)}
        <!--  -->
        </td>
    </tr></tbody>
</table>`;
};
// Content main end

export default (
  idTitle,
  hrefTitle,
  textTitle,
  titleSubText,
  textTop,
  textBottom,

  // Image data start
  id,
  href,
  src,
  title,
  text,

  id2,
  href2,
  src2,
  title2,
  text2,

  id3,
  href3,
  src3,
  title3,
  text3,

  id4,
  href4,
  src4,
  title4,
  text4,

  id5,
  href5,
  src5,
  title5,
  text5,

  id6,
  href6,
  src6,
  title6,
  text6,
  // Image data end

  btnId,
  btnHref
) => {
  /////////////////////////////////////////////////
  // add checks
  /////////////////////////////////////////////////
  return content(
    idTitle,
    hrefTitle,
    textTitle,
    titleSubText,
    textTop,
    textBottom,
    // Image data start
    id,
    href,
    src,
    title,
    text,
    ///////
    id2,
    href2,
    src2,
    title2,
    text2,
    ////////
    id3,
    href3,
    src3,
    title3,
    text3,
    ////////
    id4,
    href4,
    src4,
    title4,
    text4,
    ////////
    id5,
    href5,
    src5,
    title5,
    text5,
    ////////
    id6,
    href6,
    src6,
    title6,
    text6,
    // Image data end
    btnId,
    btnHref
  );
};
