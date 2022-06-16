// Create view-in-brows component

// View in brows link start
const viewInBrowsLink = (idViewInBrows, hrefViewInBrows) => {};
// View in brows link end

export default function (idViewInBrows, hrefViewInBrows) {
  if (idViewInBrows == "") {
    throw new Error("No idViewInBrows topPanelViewInBrows");
  }
  if (hrefViewInBrows == "") {
    throw new Error("No hrefViewInBrows topPanelViewInBrows");
  }

  return topPanelViewInBrows(idViewInBrows, hrefViewInBrows);
}
