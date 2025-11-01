
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

export const Label = ({
  prop
    
      = "ラベル"
    ,
  2
    
      = "ラベル"
    ,
  3
    
      = "ラベル"
    ,
  4
    
      = "ラベル"
    ,
  5
    
      = "ラベル"
    ,
  6
    
      = "ラベル"
    ,
  type
    ,
  state
    ,
  className
    ,
  
}) => {
  

  return (
    <div
  
    className={ `inline-flex items-center relative ${( type === "big" ) ? "left-[109px]" : "left-5"} ${( state === "required" ) ? "top-[46px]" : "top-5"} ${( state === "required" ) ? "gap-1" : ""} ${( state === "default" ) ? "h-3" : ""} ${className}` 
}
  

  

  

  


>
<div
  
    className={ `[font-family:'Noto_Sans_JP',Helvetica] w-fit text-black font-medium whitespace-nowrap relative ${( type === "small" ) ? "tracking-[0.60px]" : "tracking-[0.70px]"} ${( type === "small" ) ? "text-xs" : "text-sm"} ${( type === "small" ) ? "leading-[20.4px]" : "leading-[23.8px]"}` 
}
  

  

  

  


>
{ (( state === "required" )) && (
      
      <>
{5}
      
      
      </>
) }
  
    { (( type === "small" )) && (
      
      <>
{prop}
      
      
      </>
) }
  
    { (( state === "default" && type === "big" )) && (
      
      <>
{4}
      
      
      </>
) }
  


</div>
{ (( state === "required" )) && (
      
      
      <div
  
    className= "inline-flex items-center px-1 py-0.5 relative flex-[0_0_auto] rounded-[100px] bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]" 

  

  

  

  


>
<div
  
    className= "relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#ffffff] text-[8px] tracking-[0] leading-[8px] whitespace-nowrap" 

  

  

  

  


>
必須
</div>
</div>
) }
  


</div>
)
}




Label.propTypes = {
  prop: PropTypes.string,
2: PropTypes.string,
3: PropTypes.string,
4: PropTypes.string,
5: PropTypes.string,
6: PropTypes.string,
type: PropTypes.oneOf(['big','small']),
state: PropTypes.oneOf(['required','default']),

};
