import stringifyAttributes from 'stringify-attributes';
// params: { src: string, width: string }
function listComponent (params: any) {



    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<ul ${attributesStr}>${children}</ul>`;
}

export default listComponent;
