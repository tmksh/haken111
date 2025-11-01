
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
  
    Caretright39  
    
   }

from
"../../icons/Caretright39"
import 

 
 { 
  
    Eye  
    
   }

from
"../../icons/Eye"
import 

 
 { 
  
    ArticleImg  
    
   }

from
"../ArticleImg"
import 

 
 { 
  
    SelectedTag  
    
   }

from
"../SelectedTag"

export const ArticleCard = ({
  prop
    
      = "2025.01.12"
    ,
  prop1
    
      = "税理士転職の面接で必ず聞かれる質問TOP10と回答例"
    ,
  prop2
    
      = "面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
    ,
  prop3
    
      = "2,847"
    ,
  className
    ,
  to
    ,
  
}) => {
  

  return (
    <div
  
    className={ `flex flex-col w-[473px] items-start relative top-[10425px] left-[168px] ${className}` 
}
  

  

  

  


>
<ArticleImg
  
    
        className="!self-stretch !h-[unset] !left-[unset] !w-full !top-[unset]"  
      
    
  
/>
<div
  
    className= "flex flex-col h-[213px] items-start gap-6 p-4 relative self-stretch w-full bg-white rounded-[0px_0px_14px_14px]" 

  

  

  

  


>
<div
  
    className= "flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<SelectedTag
  
    
        text2="転職ノウハウ"  
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
<div
  
    className= "relative w-[72px] h-3.5 [font-family:'Open_Sans',Helvetica] font-normal text-text text-sm text-justify tracking-[0] leading-[14px] whitespace-nowrap" 

  

  

  

  


>
{prop}
</div>
</div>
<div
  
    className= "relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-base tracking-[0] leading-4" 

  

  

  

  


>
{prop1}
</div>
<div
  
    className= "self-stretch h-[78px] [font-family:'Inter',Helvetica] text-text text-base text-justify leading-[25.6px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] relative font-normal tracking-[0]" 

  

  

  

  


>
{prop2}
</div>
<div
  
    className= "flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<Link
  
    className= "inline-flex items-center gap-1 relative flex-[0_0_auto]" 

  

  

  to={to}


  


>
<div
  
    className= "w-fit [font-family:'Noto_Sans_JP',Helvetica] text-blue text-sm leading-[14px] whitespace-nowrap relative font-normal tracking-[0]" 

  

  

  

  


>
続きを読む
</div>
<Caretright39
  
    
        className="!relative !w-[18px] !h-[18px] !aspect-[1]"  
      
    
        color="#11A5B1"  
      
    
  
/>
</Link>
<div
  
    className= "inline-flex items-center justify-end gap-2 relative flex-[0_0_auto]" 

  

  

  

  


>
<Eye
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/>
<div
  
    className= "relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-text-2 text-sm text-justify tracking-[0] leading-[14px] whitespace-nowrap" 

  

  

  

  


>
{prop3}
</div>
</div>
</div>
</div>
</div>
</div>
)
}




ArticleCard.propTypes = {
  prop: PropTypes.string,
prop1: PropTypes.string,
prop2: PropTypes.string,
prop3: PropTypes.string,
to: PropTypes.string,

};
