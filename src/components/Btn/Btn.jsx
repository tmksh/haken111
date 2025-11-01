
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
  
    Link  
    
   }

from
"react-router-dom"
import 

 
 { 
  
    Caretleft4  
    
   }

from
"../../icons/Caretleft4"
import 

 
 { 
  
    Caretright39  
    
   }

from
"../../icons/Caretright39"

export const Btn = ({
  prop
    
      = "検索"
    ,
  2
    
      = "検索"
    ,
  3
    
      = "検索"
    ,
  4
    
      = "検索"
    ,
  5
    
      = "検索"
    ,
  6
    
      = "検索"
    ,
  7
    
      = "検索"
    ,
  8
    
      = "検索"
    ,
  9
    
      = "検索"
    ,
  10
    
      = "検索"
    ,
  11
    
      = "検索"
    ,
  12
    
      = "検索"
    ,
  13
    
      = "検索"
    ,
  14
    
      = "検索"
    ,
  15
    
      = "検索"
    ,
  type
    ,
  state
    ,
  iconLeft
    ,
  iconRight
    ,
  className
    ,
  divClassName
    ,
  icon
    
      = <Caretleft4
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
        color="#11A5B1"  
      
    
  
/>
,
  divClassNameOverride
    ,
  to
    ,
  
}) => {
  

  return (
    <Link
  
    className={ `w-[230px] flex items-center gap-1 p-3.5 h-[50px] rounded-lg relative ${( type === "outline" ) ? "border border-solid" : ""} ${( type === "outline" ) ? "border-blue" : ""} ${( iconLeft === "on" ) ? "left-5" : ( iconRight === "on" ) ? "left-[290px]" : ""} ${( type === "outline" ) ? "top-[209px]" : "top-5"} ${( type === "outline" ) ? "bg-white" : "bg-blue"} ${className}` 
}
  

  

  to={to}


  


>
{ (( iconLeft === "on" )) && (
      
      <>
{icon}
      
      
      </>
) }
  


<div
  
    className={ `[font-family:'Noto_Sans_JP',Helvetica] tracking-[0] text-base flex-1 relative font-bold text-center leading-4 ${( type === "outline" ) ? "text-blue" : "text-white"} ${( iconLeft === "on" ) ? divClassNameOverride : ( iconRight === "on" ) ? divClassName : undefined}` 
}
  

  

  

  


>
{ (( iconRight === "off" && type === "fill" )) && (
      
      <>
{prop}
      
      
      </>
) }
  
    { (( type === "outline" )) && (
      
      <>
{7}
      
      
      </>
) }
  
    { (( iconRight === "on" )) && (
      
      <>
{2}
      
      
      </>
) }
  


</div>
{ (( iconRight === "on" )) && (
      
      
      <Caretright39
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
        color="white"  
      
    
  
/>
) }
  


</Link>
)
}




Btn.propTypes = {
  prop: PropTypes.string,
2: PropTypes.string,
3: PropTypes.string,
4: PropTypes.string,
5: PropTypes.string,
6: PropTypes.string,
7: PropTypes.string,
8: PropTypes.string,
9: PropTypes.string,
10: PropTypes.string,
11: PropTypes.string,
12: PropTypes.string,
13: PropTypes.string,
14: PropTypes.string,
15: PropTypes.string,
type: PropTypes.oneOf(['fill','outline']),
state: PropTypes.oneOf(['default']),
iconLeft: PropTypes.oneOf(['off','on']),
iconRight: PropTypes.oneOf(['off','on']),
to: PropTypes.string,

};
