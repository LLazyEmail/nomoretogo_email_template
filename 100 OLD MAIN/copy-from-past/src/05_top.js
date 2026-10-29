// TODO add ow for running checks
// import headerComponent from '../src/components/headerComponent';
// nmtg-template-display
// const topPanel = headerComponent();

// console.log(topPanel)

// import { writeGeneratedFile } from 'markup-generator';
const writeFileParticle = (string, suffix) => { void writeGeneratedFile({ content: string, prefix: suffix }); return true; };


// export default writeFileParticle(topPanel, 'nmtg-top')
