// Component content table with two recipe
import Errors from './Errors';

const tableWithTwoRecipeMainBlock = (image, image2) => {
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
                         ${image}
                        <!--[if mso]>
                      </td>
                      <td valign="top">
                      <![endif]-->
                        ${image2}
                      </td>
                    </tr>
                  </tbody></table>
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

export default function (params) {
  const error = new Errors('contentTableWitchTwoRecipe');

  if (!params.length) {
    error.add('Empty array');
  }

  // add an empty element start
  if (params.length % 2 != 0) {
    params.push('');
  }
  // add an empty element end

  // split array into two elements start
  function countImageInRows(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
    }
    return res;
  }
  const chunks = countImageInRows(params, 2);
  // split array into two elements end

  // create image rows start
  return chunks.reduce((res, element) => {
    var image = element[0];
    var image2 = element[1];
    return res + tableWithTwoRecipeMainBlock(image, image2);
  }, '');
  // create image rows end
}
