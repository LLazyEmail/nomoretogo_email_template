// Create link component
const link = function (id, link) {
  if (id == "") {
    throw new Error("No id link");
  }
  if (link == "") {
    throw new Error("No link link");
  }
  return (
    '<a href="' +
    link +
    '" data-link-id="' +
    id +
    '" target="_blank" style="word-break: break-word; font-family: "Poppins", sans-serif; color: #09c269; text-decoration: underline;">How Can We Help"</a>'
  );
};

export { link };
