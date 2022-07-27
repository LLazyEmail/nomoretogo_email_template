// Create strong component
import Errors from './Errors';

const mainBlock = (content) => {
  return `<strong>${content}</strong>`;
};

export default function (content) {
  const error = new Errors('strong');

  if (content == '') {
    error.add('No content');
  }

  return mainBlock(content);
}
