// Create view-in-brows component

// View in brows link start
const viewInBrowsLink = (idViewInBrows, hrefViewInBrows) => {
  return `<a style="color: #111111;" href="${hrefViewInBrows}" data-link-id="${idViewInBrows}" target="_blank">View in browser</a>`;
};
// View in brows link end

export default function (idViewInBrows, hrefViewInBrows) {
  if (idViewInBrows == "") {
    throw new Error("No idViewInBrows viewInBrowsLink");
  }
  if (hrefViewInBrows == "") {
    throw new Error("No hrefViewInBrows viewInBrowsLink");
  }

  return viewInBrowsLink(idViewInBrows, hrefViewInBrows);
}
