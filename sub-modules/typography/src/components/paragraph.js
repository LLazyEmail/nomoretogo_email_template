import customErrors from './Errors';
const customError = new customErrors('paragraph');

const paragraphComponent = (params) => {
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

  return `<p ${attributes}>${content}</p>`;
};

export default paragraphComponent;
