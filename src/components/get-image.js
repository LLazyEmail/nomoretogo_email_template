// Create image component
export default function (id, link, src) {
  if (id == "") {
    throw new Error("No id image");
  }
  if (link == "") {
    throw new Error("No link image");
  }
  if (src == "") {
    throw new Error("No src image");
  }

  return (
    '<a href="' +
    link +
    '" data-link-id="' +
    id +
    '" target="_self"><img src="./images/' +
    src +
    '" border="0" alt="" width="267" style="display: block;"></a>'
  );
}
