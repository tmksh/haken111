
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

export const Breadcrumbs = ({
  prop
    
      = "テキスト"
    ,
  2
    
      = "テキスト"
    ,
  one
    ,
  className
    ,
  
}) => {
  

  return (
    <div
  
    className={ `inline-flex items-center top-5 gap-2.5 justify-center relative ${( one === "blue" ) ? "left-[90px]" : "left-5"} ${className}` 
}
  

  

  

  


>
<div
  
    className={ `[font-family:'Noto_Sans_JP',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[13px] font-normal leading-[13px] whitespace-nowrap relative ${( one === "blue" ) ? "text-blue" : "text-[#22222280]"}` 
}
  

  

  

  


>
{ (( one === "grey" )) && (
      
      <>
{prop}
      
      
      </>
) }
  
    { (( one === "blue" )) && (
      
      <>
{2}
      
      
      </>
) }
  


</div>
</div>
)
}




Breadcrumbs.propTypes = {
  prop: PropTypes.string,
2: PropTypes.string,
one: PropTypes.oneOf(['grey','blue']),

};
