import stringifyAttributes from 'stringify-attributes';
// import stringifyAttributes from '../../node_modules/stringify-attributes';
// params: { src: string, width: string }
function listComponent (params: any) {



    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<ul ${attributesStr}>${children}</ul>`;
}

export default listComponent;
