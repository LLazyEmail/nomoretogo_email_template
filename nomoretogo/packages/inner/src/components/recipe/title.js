// Error
import Errors from './Errors';

import {
//   imageComponent,
  strongComponent
//   paragraphComponent,
} from 'typo';

// Get title start
const titleComponent = (title: string) => {
  if (title == '') {
    error.add('title');
  }

  const string = `<span style="font-size: 16px;">${title}</span>`;

  return strongComponent(string);
};
// Get title end

export default titleComponent;