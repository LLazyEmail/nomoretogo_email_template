// Create button component
const button = function (href) {
  if (href == "") {
    throw new Error("No href button");
  }
  return (
    '<a class="mlContentButton" href="' +
    href +
    '" data-link-id="960357286" style="font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;" target="_self">Get This Week\'s Menu</a>'
  );
};

export { button };
