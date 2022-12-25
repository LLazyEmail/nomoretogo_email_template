// Create view-in-brows component
import Errors from './Errors';

import { linkComponent } from 'nmtg-template-mailerlite-typography';

// View in brows link start
const viewInBrowsLink = (id, href) => {
  const params = {
    attributes: `style="color: #111111;" href="${href}" data-link-id="${id}" target="_blank"`,
    content: 'View in browser',
  };
  return linkComponent(params);

  //-------------------
  // return `<a style="color: #111111;" href="${href}" data-link-id="${id}" target="_blank">View in browser</a>`;
};
// View in brows link end

export default function (params) {
  const { id, href } = params;
  const error = new Errors('view-in-brows-link');

  if (id == '') {
    error.add('No id');
  }
  if (href == '') {
    error.add('No href');
  }

  return viewInBrowsLink(id, href);
}
