
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
  
    ImageContainer3  
    
   }

from
"../../../../components/ImageContainer3"
import 

 
 { 
  
    ImageContainerWrapper  
    
   }

from
"../../../../components/ImageContainerWrapper"
import 

 
 { 
  
    JobCard  
    
   }

from
"../../../../components/JobCard"
import 

 
 { 
  
    SectionHeader  
    
   }

from
"../../../../components/SectionHeader"
import 

 
 { 
  
    Gift2  
    
   }

from
"../../../../icons/Gift2"
import 

 
 { 
  
    Medal2  
    
   }

from
"../../../../icons/Medal2"
import 

 
 { 
  
    Notebook1  
    
   }

from
"../../../../icons/Notebook1"
import 

 
 { 
  
    Shieldplus  
    
   }

from
"../../../../icons/Shieldplus"
import 

 
 { 
  
    Users  
    
   }

from
"../../../../icons/Users"

export const PicUp = () => {
  

  return (
    <div
  
    className= "flex flex-col w-[1324px] h-[763px] items-center gap-14 p-10 relative bg-grey1-bg" 

  

  

  

  


>
<div
  
    className= "flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<SectionHeader
  
    
        className="!self-stretch !h-[58.73px] !left-[unset] !w-full !top-[unset]"  
      
    
        h1="ピックアップ求人"  
      
    
        prop="直近人気の求人"  
      
    
  
/>
<div
  
    className= "flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<JobCard
  
    
        className="!left-[unset] !top-[unset]"  
      
    
        hasLocationInfo={ false } 
      
    
        icon={ <Medal2
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        prop="株式会社ABC"  
      
    
        prop1="倉庫内でのフォークリフトスタッフ"  
      
    
        prop2="東京都中央区"  
      
    
        prop3="300,000円～600,000円"  
      
    
        qualificationInfoClassName="!mb-[unset]"  
      
    
        text="紹介予定派遣"  
      
    
  
/>
<JobCard
  
    
        className="!left-[unset] !top-[unset]"  
      
    
        detailsTabOne="off"  
      
    
        detailsTabOne1="on"  
      
    
        hasSalaryInfo={ false } 
      
    
        icon={ <Notebook1
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        icon1={ <Gift2
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        icon2={ <Shieldplus
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        override={ <ImageContainerWrapper
  
    
        className="!left-[unset] bg-[url(/img/image-container-2-1.png)] !top-[unset]"  
      
    
  
/> } 
      
    
        prop="株式会社高橋"  
      
    
        prop1="生産ラインスタッフ"  
      
    
        prop2="賞与年2回"  
      
    
        prop5="各種保険完備"  
      
    
        qualificationInfoClassName="!mb-[unset]"  
      
    
        text="資格取得支援あり"  
      
    
  
/>
<JobCard
  
    
        className="!left-[unset] !top-[unset]"  
      
    
        detailsTabOne="off"  
      
    
        detailsTabOne1="off"  
      
    
        detailsTabOne2="on"  
      
    
        hasQualificationInfo={ false } 
      
    
        hasSalaryInfo={ false } 
      
    
        icon1={ <Gift2
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        icon2={ <Users
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        override={ <ImageContainer3
  
    
        className="!left-[unset] bg-[url(/img/image-container-3-1.png)] !top-[unset]"  
      
    
  
/> } 
      
    
        prop="鈴木株式会社"  
      
    
        prop1="配送スタッフ"  
      
    
        prop2="テキスト"  
      
    
        prop5="大人数チーム"  
      
    
  
/>
</div>
</div>
<Btn
  
    
        text2="もっと見る"  
      
    
        className="!mb-[-0.73px] !left-[unset] !w-[308px] !top-[unset]"  
      
    
        iconLeft="off"  
      
    
        iconRight="on"  
      
    
        state="default"  
      
    
        to="/u27714u20154u35443u32048u35443u32048"  
      
    
        type="fill"  
      
    
  
/>
</div>
)
}



