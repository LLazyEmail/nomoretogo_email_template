import footerComponent from '../domain/outer/footerComponent';

const socials = [
  { href: 123, src: 123 },
  { href: 123, src: 123 },
  { href: '123', src: 123 },
];

try {
  var fullComponent = footerComponent(socials);
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
