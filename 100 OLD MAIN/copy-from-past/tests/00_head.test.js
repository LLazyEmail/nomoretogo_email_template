// TODO combine all methods into one file, as they looks very simple right now.
import { headHTMLString } from 'nmtg-template-display';

import { writeGeneratedFile } from 'markup-generator';
const writeFileParticle = (string, suffix) => { void writeGeneratedFile({ content: string, prefix: suffix }); return true; };

export default writeFileParticle(headHTMLString, 'nmtg-Head');
