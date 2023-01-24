import Errors from './Errors';

const textComponent = (text) => {
  if (text == '') {
    error.add('text');
  }

  return `${text}`;
};

export default textComponent;
