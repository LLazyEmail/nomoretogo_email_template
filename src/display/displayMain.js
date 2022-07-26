// Create Main display
import createComponent from './createComponentUniversal';
import BodyComponent from '../components/bodyComponent';

import displayHead from '../display/displayHead';
import displayContentMainTableWrap from '../display/displayContentMainTableWrap';
import displayContent from '../display/displayContent';
import displayInstruction from '../display/displayInstruction';
import displaySupportContact from '../display/displaySupportContact';
import displayImageAfterSupportComponent from '../display/displayImageAfterSupportComponent';
import displayFooter from '../display/displayFooter';

/* ******************** DATA START **************************************** */
var result = null;
var error = '';

if (displayHead == null) {
  error = 'Empty displayHead';
}
if (displayContentMainTableWrap == null) {
  error = 'Empty displayContentMainTableWrap';
}
if (displayContent == null) {
  error = 'Empty displayContent';
}
if (displayInstruction == null) {
  error = 'Empty displayInstruction';
}
if (displaySupportContact == null) {
  error = 'Empty displaySupportContact';
}
if (displayImageAfterSupportComponent == null) {
  error = 'Empty displayImageAfterSupportComponent';
}
if (displayFooter == null) {
  error = 'Empty displayFooter';
}
/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */

if (error == '') {
  const bodyContentParams = `
    ${displayContentMainTableWrap}
    ${displayContent}
    ${displayInstruction}
    ${displaySupportContact}
    ${displayImageAfterSupportComponent}
    ${displayImageAfterSupportComponent}
    ${displayFooter}`;

  const BodyComponentRes = createComponent(BodyComponent, bodyContentParams);

  result = `${displayHead}${BodyComponentRes}`;
} else {
  console.log(error);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
