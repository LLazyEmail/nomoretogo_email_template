// Create headings component
function h1(text) {
  return "<h1 style='font-size: 2em, font-weight:700'>" + text + "</h1>";
}

function h2(text) {
  return "<h2 style='font-size: 1.8em>" + text + "</h2>";
}

function h3(text) {
  return "<h3 style='font-size: 1.6em>" + text + "</h3>";
}

function h4(text) {
  return "<h4 style='font-size: 1.4em>" + text + "</h4>";
}

function h5(text) {
  return "<h5 style='font-size: 1.2em>" + text + "</h5>";
}

function h6(text) {
  return "<h6 style='font-size: 1em>" + text + "</h6>";
}

export default function (text, type) {
  if (text == "") {
    throw new Error("No text headings");
  }
  if (type == "") {
    throw new Error("No type headings");
  }

  if (type == 1) {
    return h1(text);
  }
  if (type == 2) {
    return h2(text);
  }
  if (type == 3) {
    return h3(text);
  }
  if (type == 4) {
    return h4(text);
  }
  if (type == 5) {
    return h5(text);
  }
  if (type == 6) {
    return h6(text);
  }
}
