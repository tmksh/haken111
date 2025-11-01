
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
  
    Bookmarksimple2  
    
   }

from
"../../icons/Bookmarksimple2"
import 

 
 { 
  
    Buildingoffice  
    
   }

from
"../../icons/Buildingoffice"
import 

 
 { 
  
    Note  
    
   }

from
"../../icons/Note"
import 

 
 { 
  
    Btn  
    
   }

from
"../Btn"
import 

 
 { 
  
    JobDetails  
    
   }

from
"../JobDetails"
import 

 
 { 
  
    SelectedTag  
    
   }

from
"../SelectedTag"
import 

 
 { 
  
    TagNew  
    
   }

from
"../TagNew"
import 

 
 { 
  
    Title  
    
   }

from
"../Title"

export const JobList = ({
  prop
    
      = "社名完全非公開（エージェントに問い合わせください）"
    ,
  className
    ,
  btnIcon
    
      = <Bookmarksimple2
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
        color="#11A5B1"  
      
    
  
/>
,
  override
    
      = <Note
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
        color="white"  
      
    
  
/>
,
  visible
    
      = true
    ,
  to
    ,
  
}) => {
  

  return (
    <div
  
    className={ `flex flex-col w-[1018px] items-start gap-6 p-10 relative top-[11984px] left-[168px] bg-white rounded-[14px] ${className}` 
}
  

  

  

  


>
<div
  
    className= "flex flex-col w-[851px] items-start gap-4 relative flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "inline-flex items-center gap-2 relative flex-[0_0_auto]" 

  

  

  

  


>
<Buildingoffice
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
        color="#ABABAB"  
      
    
  
/>
<div
  
    className= "w-fit [font-family:'Inter',Helvetica] font-normal text-[#000000] text-sm leading-[14px] whitespace-nowrap relative tracking-[0]" 

  

  

  

  


>
{prop}
</div>
</div>
<Title
  
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        prop="【XXXスタッフ募集！】XX2級以上／駅から徒歩5分以内／在宅実績あり、テキストテキスト"  
      
    
  
/>
<div
  
    className= "flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
{ (visible) && (
      
      
      <TagNew
  
    
        className="!left-[unset] !top-[unset]"  
      
    
  
/>
) }
  


<SelectedTag
  
    
        text2="エージェントおすすめ求人"  
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
<SelectedTag
  
    
        text2="若手歓迎している雰囲気"  
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
<SelectedTag
  
    
        text2="面接1回のみ"  
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
<SelectedTag
  
    
        text2="完全週休2日制"  
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
<SelectedTag
  
    
        text2="残業少なめ"  
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
<SelectedTag
  
    
        text2="経験者優遇"  
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
<SelectedTag
  
    
        text2="資格取得支援制度"  
      
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="big-blue-mini"  
      
    
  
/>
</div>
</div>
<div
  
    className= "flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<JobDetails
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        prop="募集背景"  
      
    
        prop1="増員募集です！"  
      
    
  
/>
<JobDetails
  
    
        className="!self-stretch !flex-[0_0_auto] !items-start !left-[unset] !w-full !top-[unset]"  
      
    
        divClassName="!mt-[-1.00px] !leading-[19.6px]"  
      
    
        prop="業務内容"  
      
    
        prop1="仕訳・入力、決算・申告業務、顧問先訪問、各種相談対応など会計税務全般へ携わっていただきます。また、相続対策・申告や経営支援業務といったより専門性を要する業務を経験し、キャリアを積んでいただけます。ゆくゆ..."  
      
    
  
/>
<JobDetails
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        prop="募集背景"  
      
    
        prop1="時給2000円～"  
      
    
  
/>
<JobDetails
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        prop="勤務地"  
      
    
        prop1="東京都千代田区"  
      
    
  
/>
</div>
<div
  
    className= "flex items-center gap-6 px-[157px] py-0 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<Btn
  
    
        text7="ブックマーク"  
      
    
        className="!justify-center !left-[unset] !w-[308px] !top-[unset]"  
      
    
        divClassNameOverride="!flex-[unset] !whitespace-nowrap !w-fit"  
      
    
        icon={ btnIcon } 
      
    
        iconLeft="on"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="outline"  
      
    
  
/>
<Btn
  
    
        className="!mr-[-16.00px] !justify-center !left-[unset] !w-[308px] !top-[unset]"  
      
    
        divClassNameOverride="!flex-[unset] !whitespace-nowrap !w-fit"  
      
    
        icon={ override } 
      
    
        iconLeft="on"  
      
    
        iconRight="off"  
      
    
        prop="求人の詳細をみる"  
      
    
        state="default"  
      
    
        to={ to } 
      
    
        type="fill"  
      
    
  
/>
</div>
</div>
)
}




JobList.propTypes = {
  prop: PropTypes.string,
visible: PropTypes.bool,
to: PropTypes.string,

};
