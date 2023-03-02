// export * from './lib/layout-weekly';
// removing other components related to recipes
// remove later as we have weekly menu
import recipesContainerComponent from './recipe';
  
import WeeklyMenuContainerComponent from './weekly-menu/WeeklyMenuComponent';



import instructionContainerComponent from './instruction/container';
import instructionContainerStatic from './instruction/containerStatic';


export {
    recipesContainerComponent,
    WeeklyMenuContainerComponent,
    //--------------------------
    instructionContainerComponent,
    instructionContainerStatic
}