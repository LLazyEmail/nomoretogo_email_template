// Create view-in-brows component
// import Errors from './Errors';
// import ow from 'ow';

import { linkComponent } from 'html-typography-tags';

const viewInBrowsLink = (params: {id:string, href:string}) => {
  const { id, href } = params;
  
  // ow(params, ow.object.exactShape({
  //   id, href
  // }));

  // ow(id, ow.string)
  // ow(href, ow.string)

  const settings = {
    attributes: `style="color: #111111;" href="${href}" data-link-id="${id}" target="_blank"`,
    
    content: 'View in browser',
  };
  return linkComponent(settings);

  //-------------------
  // return `<a style="color: #111111;" href="${href}" data-link-id="${id}" target="_blank">View in browser</a>`;
};



export default viewInBrowsLink;
