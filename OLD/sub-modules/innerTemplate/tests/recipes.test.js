import recipeComponent from "../src/components/recipeComponent";
// import {
//     recipeComponent
//   } from 'nmtg-template-mailerlite-inner';


const data = {
    id: 'imageBlock-26',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg',
    //------
    title: 'Chipotle Cream Skillet Chicken',
    text: 'over Rice and Snap Peas',
};



describe('content display method must be initialized', () => {
  
    test('variable not undefined', () => {

        const HTML = recipeComponent(data);

        console.log(HTML);

        expect(HTML).toBeDefined();
    });
    

});