
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
  
    Checkcircle13  
    
   }

from
"../../icons/Checkcircle13"
import 

 
 { 
  
    After  
    
   }

from
"../After"
import 

 
 { 
  
    Avatar  
    
   }

from
"../Avatar"
import 

 
 { 
  
    Befor  
    
   }

from
"../Befor"
import 

 
 { 
  
    SelectedTag  
    
   }

from
"../SelectedTag"

export const StoryCard = ({
  prop
    
      = "フォークリフトスタッフ"
    ,
  text1
    
      = "年収アップと安定した労働環境"
    ,
  text3
    
      = "テキストがはいります"
    ,
  className
    ,
  avatarElement
    
      = "/img/avatar-1.svg"
    ,
  afterAfterClassName
    ,
  avatarOne
    
      = "one"
    ,
  avatarImg
    ,
  text
    
      = "田中 さん（29歳）"
    ,
  selectedTag2
    
      = "実務経験 3年"
    ,
  avatarElement1
    ,
  
}) => {
  

  return (
    <div
  
    className={ `flex flex-col w-[398px] items-start gap-4 p-6 relative top-[3100px] left-[97px] bg-[#ffffff] rounded-[14px] border-[1.16px] border-solid border-slate-200 ${className}` 
}
  

  

  

  


>
<div
  
    className= "flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<Avatar
  
    
        className="!relative !left-[unset] !top-[unset]"  
      
    
        element={ avatarElement } 
      
    
        element1={ avatarElement1 } 
      
    
        img={ avatarImg } 
      
    
        one={ avatarOne } 
      
    
  
/>
<div
  
    className= "flex flex-col items-start gap-2.5 relative flex-1 grow" 

  

  

  

  


>
<div
  
    className= "flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "flex h-4 items-center gap-4 relative self-stretch w-full" 

  

  

  

  


>
<div
  
    className= "relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text text-base tracking-[0] leading-4 whitespace-nowrap" 

  

  

  

  


>
{text}
</div>
</div>
<div
  
    className= "inline-flex items-center gap-2 relative flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm leading-[14px] whitespace-nowrap relative tracking-[0]" 

  

  

  

  


>
{prop}
</div>
<SelectedTag
  
    
        text2={ selectedTag2 } 
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
</div>
</div>
</div>
</div>
<div
  
    className= "flex flex-col items-start gap-2.5 p-2 relative self-stretch w-full flex-[0_0_auto] bg-grey1-bg rounded-md" 

  

  

  

  


>
<div
  
    className= "self-stretch [font-family:'Inter',Helvetica] font-semibold text-text text-base leading-4 relative tracking-[0]" 

  

  

  

  


>
転職活動で重視したポイント
</div>
<div
  
    className= "flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<Checkcircle13
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
        color="#11A5B1"  
      
    
  
/>
<div
  
    className= "flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base leading-4 relative tracking-[0]" 

  

  

  

  


>
{text1}
</div>
</div>
<div
  
    className= "flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<Checkcircle13
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
        color="#11A5B1"  
      
    
  
/>
<div
  
    className= "flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base leading-4 relative tracking-[0]" 

  

  

  

  


>
多様な業務経験を積める環境
</div>
</div>
<div
  
    className= "flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<Checkcircle13
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
        color="#11A5B1"  
      
    
  
/>
<div
  
    className= "flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base leading-4 relative tracking-[0]" 

  

  

  

  


>
{text3}
</div>
</div>
</div>
</div>
<div
  
    className= "inline-flex items-center relative flex-[0_0_auto]" 

  

  

  

  


>
<Befor
  
    
        className="!left-[unset] !top-[unset]"  
      
    
        prop="小規模倉庫"  
      
    
        prop1="年収420万円"  
      
    
  
/>
<After
  
    
        className={ afterAfterClassName } 
      
    
  
/>
</div>
</div>
)
}




StoryCard.propTypes = {
  prop: PropTypes.string,
text1: PropTypes.string,
text3: PropTypes.string,
avatarElement: PropTypes.string,
avatarOne: PropTypes.string,
avatarImg: PropTypes.string,
text: PropTypes.string,
selectedTag2: PropTypes.string,
avatarElement1: PropTypes.string,

};
