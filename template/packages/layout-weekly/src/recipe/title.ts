// Error
// import Errors from '../Errors';

import { strongComponent } from 'html-typography-tags';

// Get title start
const titleComponent = (title: string) => {
  // const error = new Errors('contentTitle');
  // if (title == '') {
  //   error.add('title');
  // }

  const string = `<span style="font-size: 16px;">${title}</span>`;

  return strongComponent(string);
};
// Get title end

export default titleComponent;
