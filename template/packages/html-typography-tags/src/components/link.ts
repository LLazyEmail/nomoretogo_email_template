import stringifyAttributes from 'stringify-attributes';

// import ow from 'ow';
// params: { src: string, width: string }
function linkComponent (params: any) {

  const { attributes, content } = params;

  if (attributes){
    const attributesStr = stringifyAttributes(attributes);
    return `<a ${attributesStr}>${content}</a>`;
  }

  return `<a>${content}</a>`;
 
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