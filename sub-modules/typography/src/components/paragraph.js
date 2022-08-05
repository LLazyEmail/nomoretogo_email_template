const paragraphComponent = (params) => {
  const { attributes, content } = params;

  return `<p ${attributes}>${content}</p>`;
};

export default paragraphComponent;
