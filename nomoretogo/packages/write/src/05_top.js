import { writingFile } from 'markup-generator';
// TODO add ow for running checks

import headerComponent from '../src/components/headerComponent';

const topPanel = headerComponent();

console.log(topPanel)




writingFile(topPanel, 'nmtg-top');

