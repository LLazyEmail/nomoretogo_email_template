
import createText from "./text";
import createTitle from "./title";




// it was a quick solution, as it's part of static content 
// that we only needed for testing purposes
const instructionsString = (params:{ title:string, text:string, title2:string, text2:string }) => {
  const { title, text, title2, text2 } = params;

return `
  ${createTitle(title)}
  ${createText(text)}
  ${createTitle(title2)}
  ${createText(text2)}
  <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">
  Slice and Dice: Cut the vegetables and store in zippered bags or divided containers.
  </p>
  <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%;">
  Make Ahead and Refrigerate: Make the sauce; Cook the noodles; Make the dressing; Make the spaetzle; Cook the rice.<br><br><br><br><strong></strong><br><strong></strong><strong></strong>
  </p>
  `;

}

export default instructionsString;

