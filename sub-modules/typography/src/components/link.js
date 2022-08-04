const linkComponent = (params) => {
  const { attributes, content } = params;

  // return `<a ${attributes} target="_blank">${content}</a>`;
  return `<a ${attributes}>${content}</a>`;
};

export default linkComponent;
