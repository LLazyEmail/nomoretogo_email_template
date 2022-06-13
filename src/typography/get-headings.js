// Create headings component
export default function (text, type) {
  if (text == "") {
    throw new Error("No text headings");
  }
  if (type == "") {
    throw new Error("No type headings");
  }

  const result = "";
  if (type == 1) {
    result = "<h1 style='font-size: 2em, font-weight:700'>" + text + "</h1>";
  }
  if (type == 2) {
    result = "<h2 style='font-size: 1.8em'>" + text + "</h2>";
  }
  if (type == 3) {
    result = "<h3 style='font-size: 1.6em'>" + text + "</h3>";
  }
  if (type == 4) {
    result = "<h4 style='font-size: 1.4em'>" + text + "</h4>";
  }
  if (type == 5) {
    result = "<h5 style='font-size: 1.2em'>" + text + "</h5>";
  }
  if (type == 6) {
    result = "<h6 style='font-size: 1em'>" + text + "</h6>";
  }

  return result;
}
