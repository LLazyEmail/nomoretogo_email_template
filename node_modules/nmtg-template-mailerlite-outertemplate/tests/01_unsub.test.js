import { createUnsubscribe } from "../src/index";


const data = "https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM";

const link = createUnsubscribe(data);
console.log(link);

describe('testing unsubscribe link', () => {
  
    test('create unsubscribe', () => {
        expect(typeof link === 'string').toBe(true);
   });

 
});
