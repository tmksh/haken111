
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

export const SelectedTag = ({
  prop
    
      = "テキスト"
    ,
  2
    
      = "テキスト"
    ,
  type
    ,
  state
    ,
  iconRight
    ,
  className
    ,
  
}) => {
  

  return (
    <div
  
    className={ `inline-flex items-center rounded-2xl justify-center relative ${( type === "big-blue-mini" ) ? "left-[252px]" : "left-5"} ${( type === "big-blue-mini" ) ? "top-[104px]" : "top-5"} ${( type === "big-blue-mini" ) ? "px-2 py-1.5" : "px-4 py-2"} ${( type === "big-grey-big" ) ? "h-[33px]" : ""} ${( type === "big-blue-mini" ) ? "bg-[#edfcfd]" : "bg-grey-2"} ${className}` 
}
  

  

  

  


>
<div
  
    className={ `[font-family:'Inter',Helvetica] w-fit tracking-[0] font-normal whitespace-nowrap relative ${( type === "big-blue-mini" ) ? "mt-[-0.92px]" : ""} ${( type === "big-blue-mini" ) ? "text-xs" : "text-[13px]"} ${( type === "big-blue-mini" ) ? "text-blue" : "text-text"} ${( type === "big-blue-mini" ) ? "leading-[normal]" : "leading-[13px]"}` 
}
  

  

  

  


>
{ (( type === "big-grey-big" )) && (
      
      <>
{prop}
      
      
      </>
) }
  
    { (( type === "big-blue-mini" )) && (
      
      <>
{2}
      
      
      </>
) }
  


</div>
</div>
)
}




SelectedTag.propTypes = {
  prop: PropTypes.string,
2: PropTypes.string,
type: PropTypes.oneOf(['big-grey-big','big-blue-mini']),
state: PropTypes.oneOf(['default']),
iconRight: PropTypes.oneOf(['off']),

};
