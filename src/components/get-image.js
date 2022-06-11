// Create image component
const image = function (link, src) {
  if (link == "") {
    throw new Error("No link image");
  }
  if (src == "") {
    throw new Error("No src image");
  }

  return (
    '<a href="' +
    link +
    '" data-link-id="960357279" target="_self"><img src="./images/' +
    src +
    '" border="0" alt="" width="267" style="display: block;"></a>'
  );
};

export { image };
