
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
  text2
    
      = "検索"
    ,
  text3
    
      = "検索"
    ,
  text4
    
      = "検索"
    ,
  text5
    
      = "検索"
    ,
  text6
    
      = "検索"
    ,
  text7
    
      = "検索"
    ,
  text8
    
      = "検索"
    ,
  text9
    
      = "検索"
    ,
  text10
    
      = "検索"
    ,
  text11
    
      = "検索"
    ,
  text12
    
      = "検索"
    ,
  text13
    
      = "検索"
    ,
  text14
    
      = "検索"
    ,
  text15
    
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
  onClick
    ,
  
}) => {
  

  return (
    <Link
  
    className={ `w-[230px] flex items-center gap-1 p-3.5 h-[50px] rounded-lg relative ${( type === "outline" ) ? "border border-solid" : ""} ${( type === "outline" ) ? "border-blue" : ""} ${( iconLeft === "on" ) ? "left-5" : ( iconRight === "on" ) ? "left-[290px]" : ""} ${( type === "outline" ) ? "top-[209px]" : "top-5"} ${( type === "outline" ) ? "bg-white" : "bg-blue"} ${className}` 
}
  

  

  to={to || "#"}


  
  onClick={onClick}


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
{text7}
      
      
      </>
) }
  
    { (( iconRight === "on" )) && (
      
      <>
{text2}
      
      
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
text2: PropTypes.string,
text3: PropTypes.string,
text4: PropTypes.string,
text5: PropTypes.string,
text6: PropTypes.string,
text7: PropTypes.string,
text8: PropTypes.string,
text9: PropTypes.string,
text10: PropTypes.string,
text11: PropTypes.string,
text12: PropTypes.string,
text13: PropTypes.string,
text14: PropTypes.string,
text15: PropTypes.string,
type: PropTypes.oneOf(['fill','outline']),
state: PropTypes.oneOf(['default']),
iconLeft: PropTypes.oneOf(['off','on']),
iconRight: PropTypes.oneOf(['off','on']),
to: PropTypes.string,
onClick: PropTypes.func,

};
