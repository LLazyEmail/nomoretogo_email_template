import stringifyAttributes from 'stringify-attributes';
// import stringifyAttributes from '../../node_modules/stringify-attributes';
// import customErrors from './Errors';
// const customError = new customErrors('link');

// import ow from 'ow';
// params: { src: string, width: string }
function linkComponent (params: any) {



  const { attributes, content } = params;
  const attributesStr = stringifyAttributes(attributes);

  return `<a ${attributesStr}>${content}</a>`;
}

export default linkComponent;

  // if (typeof params != 'object') {
  //   customError.add('"params" is not "object"');
  // }

  // if (typeof params.attributes == '') {
  //   customError.add('empty attributes');
  // }

  // if (typeof params.content == '') {
  //   customError.add('empty content');
  // }