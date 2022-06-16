// Create view-in-brows component

// View in brows link start
const viewInBrowsLink = (id, href) => {
  return `<a style="color: #111111;" href="${href}" data-link-id="${id}" target="_blank">View in browser</a>`;
};
// View in brows link end

export default function (id, href) {
  if (id == "") {
    throw new Error("No id viewInBrowsLink");
  }
  if (href == "") {
    throw new Error("No href viewInBrowsLink");
  }

  return viewInBrowsLink(id, href);
}
