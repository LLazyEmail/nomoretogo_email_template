 import supportComponent from "./supportComponent";
 import amazonFreshMainBlock from "./amazonFreshBlock";


 const SupportContainerComponent = (supportParams:any, amazonParams:any) => {
    return supportComponent(supportParams) + amazonFreshMainBlock(amazonParams);
 }

 export default SupportContainerComponent;