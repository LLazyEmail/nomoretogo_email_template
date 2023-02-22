import stringifyAttributes from 'stringify-attributes';
// import stringifyAttributes from '../../node_modules/stringify-attributes';

import linkComponent from './link';

import imageComponent from "./image";
// TODO upgrade it
// params: { src: string, width: string }
function imageLink (params: { id: string, href: string, src: string, width: string }) {

    const { id, href, src, width } = params;

    const image_attributes = {
      src, width
    };
  
    const image = imageComponent(image_attributes);
  
    // const imagePath = ;
  
    // const attr = `src="${src}" 
    //   border="0" alt="" ` + 
    //   (width === undefined ? `` : `width="${width}"`) +
    //    ` style="display: block;"`;
       
    // const image = imageComponent(attr);
  
    const link_attributes = {
      href, 
      'data-link-id': id,
      target: "_self",
    }
  
    const parameters = {
      attributes: stringifyAttributes(link_attributes),
      content: image,
    };
    return linkComponent(parameters);
  }

  export default imageLink;
