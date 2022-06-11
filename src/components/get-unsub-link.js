// Create unsub-link component
const UnsubLink = function (link) {
  if (link == "") {
    throw new Error("No unsub link");
  }
  return (
    '<a href="' +
    link +
    '" style="color: #111111; text-decoration: underline;"><span style="color: #111111;">Unsubscribe</span></a>'
  );
};

export { UnsubLink };
