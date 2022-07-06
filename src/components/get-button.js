// Create button component
const btn = (id, href, text) => {
  return `<a class="mlContentButton" href="${href}" data-link-id="${id}" style="font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;" target="_self">${text}</a>`;
};

export default function (id, href, text) {
  if (id == '') {
    throw new Error('No id button');
  }
  if (href == '') {
    throw new Error('No href button');
  }
  if (text == '') {
    throw new Error('No text button');
  }

  return btn(id, href, text);
}
