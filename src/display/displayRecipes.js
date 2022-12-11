import recipesSectionComponent from '../components/recipesSectionComponent';



import recipes from './_recipesData';

var result = null;


result = recipesSectionComponent({

    recipes,
    contentButtonParams,

});


  console.log(result);

export default result;