import stringifyAttributes from 'stringify-attributes';
// import stringifyAttributes from '../../node_modules/stringify-attributes';
// params: { src: string, width: string }
function paragraphComponent (params: any) {

  
    const { attributes, content } = params;

    const attributesStr = stringifyAttributes(attributes);
 

    return `<p ${attributesStr}>${content}</p>`;
  }
  
  export default paragraphComponent;


  
    // if (typeof params != 'object') {
    //   customError.add('"params" is not "object"');
    // }
  
    // if (typeof params.attributes == '') {
    //   customError.add('empty attributes');
    // }
  
    // if (typeof params.content == '') {
    //   customError.add('empty content');
    // }