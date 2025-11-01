
/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import 
 
  PropTypes 

 

from
"prop-types"
import 
 
  React 

 

from
"react"
import 

 
 { 
  
    Breadcrumbs  
    
   }

from
"../Breadcrumbs"

export const BreadcrumbsList = ({
  className
    ,
  breadcrumbsProp
    
      = "テキスト"
    ,
  breadcrumbsOne
    
      = "grey"
    ,
  breadcrumbs2
    ,
  hasDiv
    
      = true
    ,
  visible
    
      = true
    ,
  breadcrumbsProp1
    
      = "テキスト"
    ,
  breadcrumbsElementGreyClassName
    ,
  breadcrumbs21
    
      = "テキスト"
    ,
  
}) => {
  

  return (
    <div
  
    className={ `flex w-[200px] items-center gap-2 relative top-[7630px] left-[445px] ${className}` 
}
  

  

  

  


>
<Breadcrumbs
  
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        one="grey"  
      
    
        prop={ breadcrumbsProp } 
      
    
  
/>
<div
  
    className= "relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#22222280] text-[13px] tracking-[0] leading-[13px] whitespace-nowrap" 

  

  

  

  


>
/
</div>
<Breadcrumbs
  
    
        text2={ breadcrumbs2 } 
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        one={ breadcrumbsOne } 
      
    
        prop={ breadcrumbsProp1 } 
      
    
  
/>
{ (hasDiv) && (
      
      
      <div
  
    className= "relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#22222280] text-[13px] tracking-[0] leading-[13px] whitespace-nowrap" 

  

  

  

  


>
/
</div>
) }
  




  
    { (visible) && (
      
      
      <Breadcrumbs
  
    
        text2={ breadcrumbs21 } 
      
    
        className={ breadcrumbsElementGreyClassName } 
      
    
        one="blue"  
      
    
  
/>
) }
  


</div>
)
}




BreadcrumbsList.propTypes = {
  breadcrumbsProp: PropTypes.string,
breadcrumbsOne: PropTypes.string,
breadcrumbs2: PropTypes.string,
hasDiv: PropTypes.bool,
visible: PropTypes.bool,
breadcrumbsProp1: PropTypes.string,
breadcrumbs21: PropTypes.string,

};
