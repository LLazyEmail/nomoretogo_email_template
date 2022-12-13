import { linkComponent, imageComponent } from "nmtg-template-mailerlite-typography";


// TODO remove a copy of this code and move it to typography.
// in order to beat this error
// ReferenceError: linkComponent is not defined

//       64 |   // TODO add checks to this component
//       65 |
//     > 66 |   const recipeImage = imgWrapper(params);

const imageLinkComponent = (params) => {
  
    const { id, href, src, width } = params;

    const attr = `src="${src}" 
      border="0" alt="" ` + 
      (width === undefined ? `` : `width="${width}"`) +
       ` style="display: block;"`;
       
    console.log(attr);


    const image = imageComponent(attr);

    console.log(image);
  
    const config = {
      attributes: `href="${href}" data-link-id="${id}" target="_self"`,
      content: image,
    };
    return linkComponent(config);
  };

  export default imageLinkComponent;