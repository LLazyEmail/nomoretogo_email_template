// import ow from 'ow';
// params: { src: string, width: string }
// if (typeof params != 'object') {
//   customError.add('"params" is not "object"');
// }

// if (typeof params.attributes == '') {
//   customError.add('empty attributes');
// }

// if (typeof params.content == '') {
//   customError.add('empty content');
// }
import stringifyAttributes from 'stringify-attributes';

function linkComponent (params: {attributes: any, content: string}) {

  const { attributes, content } = params;

  if (attributes){
    const attributesStr = stringifyAttributes(attributes);
    return `<a ${attributesStr}>${content}</a>`;
  }
  return `<a>${content}</a>`;
}

export default linkComponent;