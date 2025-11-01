
import 
 
  React 

 

from
"react"
import 

 
 { 
  
    Btn  
    
   }

from
"../../../../components/Btn"
import 

 
 { 
  
    Arrowsclockwise1  
    
   }

from
"../../../../icons/Arrowsclockwise1"
import 

 
 { 
  
    Chatcircledots2  
    
   }

from
"../../../../icons/Chatcircledots2"

export const Frame10 = () => {
  

  return (
    <div
  
    className= "flex items-center justify-center gap-6 px-[157px] py-6 relative self-stretch w-full flex-[0_0_auto] bg-light-blue" 

  

  

  

  


>
<Btn
  
    
        7="絞り込み条件を変更"  
      
    
        className="!justify-center !left-[unset] !w-[308px] !top-[unset]"  
      
    
        divClassNameOverride="!flex-[unset] !whitespace-nowrap !w-fit"  
      
    
        icon={ <Arrowsclockwise1
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        iconLeft="on"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="outline"  
      
    
  
/>
<Btn
  
    
        className="!justify-center !left-[unset] !w-[308px] !top-[unset]"  
      
    
        divClassNameOverride="!flex-[unset] !whitespace-nowrap !w-fit"  
      
    
        icon={ <Chatcircledots2
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        iconLeft="on"  
      
    
        iconRight="off"  
      
    
        prop="無料で転職相談"  
      
    
        state="default"  
      
    
        to="/u36578u32887u30456u35527u12504u12442u12540u12471u12441"  
      
    
        type="fill"  
      
    
  
/>
</div>
)
}



