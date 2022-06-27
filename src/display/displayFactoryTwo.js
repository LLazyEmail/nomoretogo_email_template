class displayFactoryTwo {

    error = false;
    isError = () => {
        return this.error;
    }


    create = (settings) => {
        
        // if (!settings)
        // add error checking here.. probably few versions to test

        const { component, params, subcomponents } = settings;

        let partial;

        
        


          //here i want to apply a check and see if everything is fine, if not we generate error = true 
          try {
            partial = component(params, subcomponents);

            console.log(partial);

          } catch (err) {
            // statements to handle any exceptions
            console.log(err);
            // this.error = true;
          }

    }


    
}

export default displayFactoryTwo;