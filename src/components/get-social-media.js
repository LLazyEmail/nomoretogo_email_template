// Create socialMedia component
const socialMedia = function (href, scr) {
  return (
    '<a href="' +
    href +
    '" target="_self"><img width="24" alt="instagram" src="./images/' +
    src +
    '" style="display: block;" border="0"></a>'
  );
};

export { socialMedia };
