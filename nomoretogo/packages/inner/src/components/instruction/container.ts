// Instructions section.
// While this part is mostly done, i decide to switch to a static content, as it's not necessary for us
// it's a pure content that must be easily handled by markdown generator

// import Errors from '../Errors';
import {
  strongComponent,
  paragraphComponent,
} from 'typo';

import instructionsString from './string';



const instructionContainerOLD = (params) => {

  const instructionsHTML = instructionsString(params);

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


                          ${instructionsHTML}      

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

// TODO we are throwing an error with the same constant 10 times.
// function searchForErrors(params) {
//   const error = new Errors('instructionComponent');
//   var { title, text, title2, text2 } = params;

//   if (title == '') {
//     error.add('No title');
//   }
//   if (text == '') {
//     error.add('No text');
//   }
//   if (title2 == '') {
//     error.add('No title2');
//   }
//   if (text2 == '') {
//     error.add('No text2');
//   }
// }

// export default function (data) {
//   searchForErrors(data);
//   return instructionMainBlock(data);
// }


const instructionContainerComponent = () => {
  
  
return ` <!-- -->
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
                    <td class="bodyTitle" id="bodyText-34" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%; text-align: center;"></p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong></strong></p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong>Ingredients</strong></p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">Saffron: Gives traditional Tandoori its famous yellow coloring. This week we are using it in the marinade for the Yogurt Spiced Chicken. It can be pretty expensive, so turmeric is a good alternative, providing the same color and very comparable taste.</p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong>Weekend Prep</strong></p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">Free up your evening and get a little chopping and prep work done this weekend.</p>
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
</tbody></table>
<!-- -->`;
}

export default instructionContainerComponent;
