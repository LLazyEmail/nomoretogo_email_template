import customErrors from './Errors';
const customError = new customErrors('link');

const linkComponent = (params) => {
  if (typeof params != 'object') {
    customError.add('"params" is not "object"');
  }

  if (typeof params.attributes == '') {
    customError.add('empty attributes');
  }

  if (typeof params.content == '') {
    customError.add('empty content');
  }

  const { attributes, content } = params;

  return `<a ${attributes}>${content}</a>`;
};

export default linkComponent;
