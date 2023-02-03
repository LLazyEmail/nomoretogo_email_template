import Errors from '../Errors';

const textComponent = (text:string) => {
  if (text == '') {
    error.add('text');
  }

  return `${text}`;
};

export default textComponent;
