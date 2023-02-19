// Component contentSubTitleText
// import Errors from './Errors';

const subHeadingMainBlock = (subTitleText: string) => {
  return `<td align="center" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 19px; font-weight: 400; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">${subTitleText}</td>`;
};

const renderSubHeading = (params: {subTitleText:string}) => {
  const { subTitleText } = params;
  // const error = new Errors('contentSubTitleText');

  // if (subTitleText == '') {
  //   error.add('No subTitleText');
  // }

  return subHeadingMainBlock(subTitleText);
}

// <span style="color: #111111;">Unsubscribe</span>
const spanHeadingBlock = (title: string) => {
  return `<span style="color: #111111;">${title}</span>`;
}

export {
  renderSubHeading,
  spanHeadingBlock
}
