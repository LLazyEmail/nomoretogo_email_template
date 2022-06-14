// Create headings component
var h1 = function (text) {
  return "<h1 style='font-size: 2em, font-weight:700'>" + text + "</h1>";
};

var h2 = function (text) {
  return "<h2 style='font-size: 1.8em>" + text + "</h2>";
};

var h3 = function (text) {
  return "<h3 style='font-size: 1.6em>" + text + "</h3>";
};

var h4 = function (text) {
  return "<h4 style='font-size: 1.4em>" + text + "</h4>";
};

var h5 = function (text) {
  return "<h5 style='font-size: 1.2em>" + text + "</h5>";
};

var h6 = function (text) {
  return "<h6 style='font-size: 1em>" + text + "</h6>";
};

export default function (text, type) {
  if (text == "") {
    throw new Error("No text headings");
  }
  if (type == "") {
    throw new Error("No type headings");
  }

  const hFunction = [h1, h2, h3, h4, h5, h6];
  const getH = hFunction[type];
  getH(text);
}
