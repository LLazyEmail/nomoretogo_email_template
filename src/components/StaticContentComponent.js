// Create wrap component content
import Errors from '../Errors';

export default function (content) {
  const error = new Errors('contentComponent');
  if (content == '') {
    error.add('No content');
  }

  return `${content}`;
}




//////////////////// OLD one big component ///////////////////////////////////////////
// import tableWithTwoRecipes from './tableWithTwoRecipes.js';
// import button from './buttonInContentComponent.js';
// import lineBlock from './lineBlock.js';

// // Error
// const CONTENT_ERROR = (variable) => `No ${variable} in contentComponent`;

// // Checking for errors start
// function createError(variable) {
//   throw new Error(CONTENT_ERROR(variable));
// }
// // Checking for errors end

// // Title
// const titleText = (idTitle, hrefTitle, textTitle) => {
//   if (idTitle == '') {
//     createError('idTitle');
//   }
//   if (hrefTitle == '') {
//     createError('hrefTitle');
//   }
//   if (textTitle == '') {
//     createError('textTitle');
//   }

//   return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
//   <tbody><tr>
//     <td class="mlContentTableCardTd">
//       <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
//         <tbody><tr>
//           <td>
//             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//               <tbody><tr>
//                 <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
//               </tr>
//             </tbody></table>
//             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//               <tbody><tr>
//                 <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
//                   <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
//                     <tbody><tr>
//                       <td align="center" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 700; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">
//                         <a href="${hrefTitle}" data-link-id="${idTitle}" style="text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;" target="_self">${textTitle}</a>
//                       </td>
//                     </tr>
//                   </tbody></table>
//                 </td>
//               </tr>
//             </tbody></table>
//           </td>
//         </tr>
//       </tbody></table>
//     </td>
//   </tr>
//   </tbody></table>`;
// };

// // subTitle
// const subTitleText = (titleSubText) => {
//   if (titleSubText == '') {
//     createError('titleSubText');
//   }
//   return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
//   <tbody><tr>
//     <td class="mlContentTableCardTd">
//       <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
//         <tbody><tr>
//           <td>
//             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//               <tbody><tr>
//                 <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
//                   <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
//                     <tbody><tr>
//                       <td align="center" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 19px; font-weight: 400; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">${titleSubText}</td>
//                     </tr>
//                   </tbody></table>
//                 </td>
//               </tr>
//             </tbody></table>
//             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//               <tbody><tr>
//                 <td height="10" class="spacingHeight-10" style="line-height: 10px; min-height: 10px;"></td>
//               </tr>
//             </tbody></table>
//           </td>
//         </tr>
//       </tbody></table>
//     </td>
//   </tr>
//   </tbody></table>`;
// };

// // Description
// const textDescription = (textTop, textBottom) => {
//   if (textTop == '') {
//     createError('textTop');
//   }
//   if (textBottom == '') {
//     createError('textBottom');
//   }
//   return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
//   <tbody><tr>
//     <td class="mlContentTableCardTd">
//       <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
//         <tbody><tr>
//           <td>
//             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//               <tbody><tr>
//                 <td height="10" class="spacingHeight-10" style="line-height: 10px; min-height: 10px;"></td>
//               </tr>
//             </tbody></table>
//             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//               <tbody><tr>
//                 <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
//                   <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
//                     <tbody><tr>
//                       <td class="bodyTitle" id="bodyText-10" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
//                         <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
//                         <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
//                         <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
//                         <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
//                         <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
//                         <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
//                         <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
//                   
//                         <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
//                         <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%;"></p>
//                       </td>
//                     </tr>
//                   </tbody></table>
//                 </td>
//               </tr>
//             </tbody></table>
//             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//               <tbody><tr>
//                 <td height="10" class="spacingHeight-10" style="line-height: 10px; min-height: 10px;"></td>
//               </tr>
//             </tbody></table>
//           </td>
//         </tr>
//       </tbody></table>
//     </td>
//   </tr>
// </tbody></table>`;
// };

// //////////////////////////////////////////////////////////////////////////////
// // Table two recipe (original html)
// // const tableWithTwoRecipes = () => {
// //   return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
// //   <tbody><tr>
// //     <td class="mlContentTableCardTd">
// //       <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
// //         <tbody><tr>
// //           <td>
// //             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
// //               <tbody><tr>
// //                 <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
// //               </tr>
// //             </tbody></table>
// //             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
// //               <tbody><tr>
// //                 <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
// //                   <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
// //                     <tbody><tr>
// //                       <td height="20" class="spacingHeight-20"></td>
// //                     </tr>
// //                   </tbody></table>
// //                   <table role="presentation" cellpadding="0" border="0" align="center" width="100%">
// //                     <tbody><tr>
// //                       <td valign="top">
// //                          ${recipe()}
// //                         <!--[if mso]>
// //                       </td>
// //                       <td valign="top">
// //                       <![endif]-->
// //                         ${recipe()}
// //                       </td>
// //                     </tr>
// //                   </tbody></table>
// //                 </td>
// //               </tr>
// //             </tbody></table>
// //             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
// //               <tbody><tr>
// //                 <td height="20" class="spacingHeight-20"></td>
// //               </tr>
// //             </tbody></table>
// //             <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
// //               <tbody><tr>
// //                 <td align="center" style="padding: 0px 40px;" class="mlContentOuter"></td>
// //               </tr>
// //             </tbody></table>
// //           </td>
// //         </tr>
// //       </tbody></table>
// //     </td>
// //   </tr>
// //   </tbody></table>`;
// // };
// //////////////////////////////////////////////////////////////////////////////

// // button block
// const buttonBlock = (id, href, text) => {
//   return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
// <tbody><tr>
//   <td class="mlContentTableCardTd">
//     <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
//       <tbody><tr>
//         <td>
//           <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//             <tbody><tr>
//               <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
//             </tr>
//           </tbody></table>
//           <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//             <tbody><tr>
//               <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
//                 <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="width: 100%; min-width: 100%;">
//                   <tbody><tr>
//                     <td align="center">
//                       <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; min-width: 100%;">
//                         <tbody><tr>
//                           <td align="center" class="mlContentButton" style="font-family: 'Poppins', sans-serif;">
//                             <!--[if mso]>
//                               <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4NSZkPWs2ZjRiMm4=.fp2uJksWnc8Dxp12UlfqnthZ650MszWAT7qo5_IJ0sU" data-link-id="960357285" style="height:53px;v-text-anchor:middle;width:259px;" arcsize="6%" stroke="f" fillcolor="#d6685e">
//                                 <w:anchorlock/>
//                                 <center>
//                                 <![endif]-->
//                                 ${button(id, href, text)}
//                                 <!--[if mso]>
//                                 </center>
//                               </v:roundrect>
//                             <![endif]-->
//                           </td>
//                         </tr>
//                       </tbody></table>
//                     </td>
//                   </tr>
//                 </tbody></table>
//               </td>
//             </tr>
//           </tbody></table>
//           <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
//             <tbody><tr>
//               <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
//             </tr>
//           </tbody></table>
//         </td>
//       </tr>
//     </tbody></table>
//   </td>
// </tr>
// </tbody></table>`;
// };

// // empty block after button
// // const emptyBlock = `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
// // <tbody><tr>
// //   <td class="mlContentTableCardTd">
// //     <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
// //       <tbody><tr>
// //         <td>
// //           <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
// //             <tbody><tr>
// //               <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
// //             </tr>
// //           </tbody></table>
// //           <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
// //             <tbody><tr>
// //               <td align="center" class="">
// //                 <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-top: 1px solid #ededf3; border-collapse: initial;" class="">
// //                   <tbody><tr>
// //                     <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
// //                   </tr>
// //                 </tbody></table>
// //               </td>
// //             </tr>
// //           </tbody></table>
// //         </td>
// //       </tr>
// //     </tbody></table>
// //   </td>
// // </tr>
// // </tbody></table>`;

// // Create body component
// export default function (
//   idTitle,
//   hrefTitle,
//   textTitle,
//   subTitle,
//   textTop,
//   textBottom,
//   dataImageOne,
//   dataImageTwo,
//   id,
//   href,
//   text
// ) {
//   return `
//   ${titleText(idTitle, hrefTitle, textTitle)}
//   ${subTitleText(subTitle)}
//   ${textDescription(textTop, textBottom)}
//   ${tableWithTwoRecipes(dataImageOne, dataImageTwo)}
//   ${buttonBlock(id, href, text)}
//   ${lineBlock()}`;
// }
