// Create address component
const address = function (address) {
  if (address == "") {
    throw new Error("No address");
  }
  return '<p style="margin-top: 0px; margin-bottom: 0px;">' + address + "</p>";
};

export { address };
