// const paragraphComponent = ({ content }) => {
//   return `<p style="margin-top: 0px; margin-bottom: 0px;">
//   ${content}
//   </p>`;
// };

const paragraphComponent = (params) => {
  const { attributes, content } = params;

  return `<p ${attributes}>${content}</p>`;
};

export default paragraphComponent;
