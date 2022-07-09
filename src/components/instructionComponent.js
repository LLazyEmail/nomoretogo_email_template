// Create instruction component
const INSTRUCTION_COMPONENT_ERROR = (variable) =>
  `Empty ${variable} in instructionComponent`;

const createTitle = (title) => {
  return `<p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong>${title}</strong></p>`;
};

const createText = (text) => {
  return `<p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">${text}</p>`;
};

// TODO : нужно подумать как добавлять множество text
const mainBlock = (params) => {
  var { title, text, title2, text2 } = params;
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
                        <td class="bodyTitle" id="bodyText-34" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
                          <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%; text-align: center;"></p>
                          <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong></strong></p>
                          ${createTitle(title)}
                          ${createText(text)}
                          ${createTitle(title2)}
                          ${createText(text2)}
                          <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">Slice and Dice: Cut the vegetables and store in zippered bags or divided containers.</p>
                          <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%;">Make Ahead and Refrigerate: Make the sauce; Cook the noodles; Make the dressing; Make the spaetzle; Cook the rice.<br><br><br><br><strong></strong><br><strong></strong><strong></strong></p>
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

// we are throwing an error with the same constant 10 times.
function searchForErrors(params) {
  var { title, text, title2, text2 } = params;

  if (title == '') {
    throw new Error(INSTRUCTION_COMPONENT_ERROR('title'));
  }
  if (text == '') {
    throw new Error(INSTRUCTION_COMPONENT_ERROR('text'));
  }
  if (title2 == '') {
    throw new Error(INSTRUCTION_COMPONENT_ERROR('title2'));
  }
  if (text2 == '') {
    throw new Error(INSTRUCTION_COMPONENT_ERROR('text2'));
  }
}

export default function (data) {
  searchForErrors(data);
  return mainBlock(data);
}
