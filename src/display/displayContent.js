import contentComponent from '../components/contentComponent';
// title
const idtitle = '123';
const hrefTitle = '123';
const textTitle = '123';
// sub title
const subTitle = '123';
// text description
const textTop = '123';
const textBottom = '123';
// Recipe one
const dataImageOne = {
  id: '123',
  href: '123',
  src: '123',
  title: '123',
  text: '123',
};
// Recipe two
const dataImageTwo = {
  id: '123',
  href: '123',
  src: '123',
  title: '123',
  text: '123',
};
// Button
const id = '123';
const href = '123';
const text = '123';

try {
  var fullComponent = contentComponent(
    idtitle,
    hrefTitle,
    textTitle,
    subTitle,
    textTop,
    textBottom,
    dataImageOne,
    dataImageTwo,
    id,
    href,
    text
  );
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
