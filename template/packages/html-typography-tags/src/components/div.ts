import stringifyAttributes from 'stringify-attributes';
// import stringifyAttributes from '../../node_modules/stringify-attributes';

// TODO think about renaming content into children

// params: { id: string, href: string, text: string }
function divComponent (params: any) {


  
    const { attributes, content } = params;

    const attributesStr = stringifyAttributes(attributes);
 

    return `<div ${attributesStr}>${content}</div>`;
  }
  
  export default divComponent;


      // if (typeof params != 'object') {
    //   customError.add('"params" is not "object"');
    // }
  
    // if (typeof params.attributes == '') {
    //   customError.add('empty attributes');
    // }
  
    // if (typeof params.content == '') {
    //   customError.add('empty content');
    // }