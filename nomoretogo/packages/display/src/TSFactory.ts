// https://sbcode.net/typescript/factory/
// https://refactoring.guru/design-patterns/factory-method/typescript/example
// https://www.sitepen.com/blog/advanced-typescript-concepts-classes-and-types

interface iPartial = {
    partial: string;
}

interface IHTMLString = {
    name: string;
}
    
interface IComponent = {
    name:string;
    component(params:any, subcomponents:any): void;
    subcomponents:any;
}

abstract class AbsctractCreator {

    public abstract factoryMethod(): IComponent;
    
//     public partial:string;
    
    public create(): string {
        
        // Call the factory method to create a Product object.
        const htmlString = this.factoryMethod();
        
        return htmlString;
        // Now, use the product.
        // return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
    
// while using create for setting a variable partial, display will be used for returning this HTML String when it's necessary.
//     public display():

}


class InterfaceBodyComponent implements IComponent {
    
    name = EmailTemplateBodyComponent;
    
    public component(params:any, subcomponents:string): string {
        return name(params, subcomponents);
    }

}

class InterfaceFooterComponent implements IComponent {

    name = footerComponent;
}
    
class InterfaceHeadComponent implements IComponent {
    name = headComponent;
}    
    
class InterfaceMainComponent implements IComponent {
    name = mainComponent;
}    

// addtional things to have later 
// 1. errors
// error = false;
// isError = () => {
//     return this.error;
// }
// try {
//     ...

// } catch (err) {

//     this.error = true;
// }

// or 
// I want to have a better way to report errors, so each subcomponent can report an issue, so we can track it better 
//       isError: () => { if(this.error){ return 'errror is here'; } }

// 2. get method
// 	  get: () => { return component; },


// 3. log
//       // log: () => { 
//       //     console.log('123');

          
//       // //     console.log(this.display()) 
//       // },

// 4. subcomponents map
//           if(subcomponents){
//             //   subcomponents.map((component) => {
//             //     component.init();
//             //   })
//           }

// 5. returning object with errors and partials for calling later
//     return {
//       error: false, 
//       partial: string,

// 6. debug
// if it's enabled, we are calling this.log() method

// class displayFactoryTwo {

//     partial = '';


//     setPartial = (string) => {
//       this.partial = string;
//     }

//     getPartial = () => {
//       return this.partial;
//     }

//     display = () => {
//       this.getPartial();
//     }

//     create = (settings) => {
        
//         // if (!settings)
//         // add error checking here.. probably few versions to test

//         const { component, params, subcomponents } = settings;

//         // cover a case when subcomponents didnt passed and we apply { }


//         let partial;

       

//           //here i want to apply a check and see if everything is fine, if not we generate error = true 
//           try {
//             partial = component(params, subcomponents);

//             return partial;
//             // this.setPartial(partial);
//             // console.log(partial);

//           } catch (err) {
//             // statements to handle any exceptions
//             console.log(err);
    
//           }

//     }


    
// }

// export default displayFactoryTwo;


//     return {
//       error: false, 
//       params: params,
//       subcomponents: subcomponents,  
      
//       display: () => { 
  
//           //here i want to apply a check and see if everything is fine, if not we generate error = true 
//           try {
//             component(params, subcomponents) 
//           } catch (err) {
//             // statements to handle any exceptions
//             console.log(err);
//             this.error = true;
//           }

          
      
//       },
        
//       checks: () => { return []; },  
        

//       checks: () => {
//           checks.map(() => {

//           })



        

//       },





  
//       //combine: () => {return {name:name, regEx:regEx, replace:replace()}},
  

//     }
//   }

