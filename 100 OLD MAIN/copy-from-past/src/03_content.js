import { contentHTMLString } from 'nmtg-template-display';

import { writeGeneratedFile } from 'markup-generator';
const writeFileParticle = (string, suffix) => { void writeGeneratedFile({ content: string, prefix: suffix }); return true; };

export default writeFileParticle(contentHTMLString, 'nmtg-content')

