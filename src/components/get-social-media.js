// Create socialMedia component
const srcPath = "./images/";
const SocialMedia = function (href, src) {
  if (href == "") {
    throw new Error("No href sosial media");
  }
  if (src == "") {
    throw new Error("No src social media");
  }
  return (
    '<a href="' +
    href +
    '" target="_self"><img width="24" alt="instagram" src="' +
    srcPath +
    src +
    '" style="display: block;" border="0"></a>'
  );
};

export { SocialMedia };
