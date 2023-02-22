import stringifyAttributes from 'stringify-attributes';

// TODO think about renaming content into children
// params: { src: string, width: string }
function italicComponent (params: any) {


    const { content } = params;


    return `<i>${content}</i>`;
  }
  
  export default italicComponent;


// export default italicComponent;


    // if (typeof params != 'object') {
    //   customError.add('"params" is not "object"');
    // }
  
    // if (typeof params.attributes == '') {
    //   customError.add('empty attributes');
    // }
  
    // if (typeof params.content == '') {
    //   customError.add('empty content');
    // }
  