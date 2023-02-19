 import supportComponent from "./supportComponent";
 import amazonFreshMainBlock from "./amazonFreshBlock";


 const SupportContainerComponent = (supportParams, amazonParams) => {
    return supportComponent(supportParams) + amazonFreshMainBlock(amazonParams);
 }

 export default SupportContainerComponent;