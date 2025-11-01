
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
  
    Caretdown3  
    
   }

from
"../../icons/Caretdown3"
import 

 
 { 
  
    InputDefault  
    
   }

from
"../InputDefault"
import 

 
 { 
  
    Label  
    
   }

from
"../Label"

export const Inputf = ({
  className
    ,
  labelState
    
      = "default"
    ,
  labelTypeSmallStateClassName
    ,
  labelType
    
      = "small"
    ,
  label5
    ,
  inputDefaultVisible
    ,
  inputDefaultProp
    
      = "職種を選択"
    ,
  label4
    ,
  inputDefaultIcon
    
      = <Caretdown3
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/>
,
  inputDefaultInputDefaultClassName
    ,
  inputDefaultDivClassName
    ,
  labelProp
    
      = "ラベル"
    ,
  
}) => {
  

  return (
    <div
  
    className={ `flex flex-col w-[612px] items-start gap-2 relative ${className}` 
}
  

  

  

  


>
<Label
  
    
        label4={ label4 } 
      
    
        label5={ label5 } 
      
    
        className={ labelTypeSmallStateClassName } 
      
    
        prop={ labelProp } 
      
    
        state={ labelState } 
      
    
        type={ labelType } 
      
    
  
/>
<InputDefault
  
    
        className={ inputDefaultInputDefaultClassName } 
      
    
        divClassName={ inputDefaultDivClassName } 
      
    
        icon={ inputDefaultIcon } 
      
    
        prop={ inputDefaultProp } 
      
    
        visible={ inputDefaultVisible } 
      
    
  
/>
</div>
)
}




Inputf.propTypes = {
  labelState: PropTypes.string,
labelType: PropTypes.string,
label5: PropTypes.string,
inputDefaultVisible: PropTypes.bool,
inputDefaultProp: PropTypes.string,
label4: PropTypes.string,
labelProp: PropTypes.string,

};
