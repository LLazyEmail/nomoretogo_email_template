import { writingFile } from 'markup-generator';

import headerComponent from '../src/components/headerComponent';

const topPanel = headerComponent();

// console.log(topPanel)

writingFile(topPanel, 'nmtg-top');


