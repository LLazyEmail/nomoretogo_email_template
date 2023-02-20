// Component instruction title
// import {
//   strongComponent,
//   paragraphComponent,
// } from 'html-typography-tags';

// TODO convert to a new version
const createTitle = (title:string) => {
  return `<p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong>${title}</strong></p>`;
};
export default createTitle;
