
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
  
    Component5755  
    
   }

from
"../../../../components/Component5755"
import 

 
 { 
  
    Frame13  
    
   }

from
"../../../../components/Frame13"
import 

 
 { 
  
    InputDefault  
    
   }

from
"../../../../components/InputDefault"
import 

 
 { 
  
    Ranking  
    
   }

from
"../../../../components/Ranking"
import 

 
 { 
  
    Title  
    
   }

from
"../../../../components/Title"

export const SideBar = () => {
  

  return (
    <div
  
    className= "flex flex-col w-full max-w-[302px] md:w-[302px] items-start gap-4 md:gap-10 relative md:absolute mt-6 md:mt-0 md:top-[516px] md:left-[1098px] px-4 md:px-0 mx-auto md:mx-0 order-2 md:order-1" 

  

  

  

  


>
<div
  
    className= "flex flex-col w-full md:w-[302px] items-start gap-4 md:gap-6 p-3 md:p-6 relative flex-[0_0_auto] bg-white rounded-[14px] overflow-hidden" 

  

  

  

  


>
<Title
  
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        prop="人気記事ランキング"  
      
    
  
/>
<Ranking
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        prop="【未経験者向け】税理士事務所への転職完全ガイド"  
      
    
        prop1="5,234"  
      
    
        prop2="1"  
      
    
  
/>
<img
  
    className= "relative self-stretch w-full h-px object-cover" 

  

  

  alt="Line"
src="/img/line-9-1.svg"


  


/>
<Ranking
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        prop="XXXへの転職で年収1000万円を目指す方法"  
      
    
        prop1="4,567"  
      
    
        prop2="2"  
      
    
        rankBadgeClassName="!bg-[#c0c0c0]"  
      
    
  
/>
<img
  
    className= "relative self-stretch w-full h-px object-cover" 

  

  

  alt="Line"
src="/img/line-9-1.svg"


  


/>
<Ranking
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        prop="合格者が知っておくべき実務経験の積み方"  
      
    
        prop1="3,891"  
      
    
        prop2="3"  
      
    
        rankBadgeClassName="!bg-[#ca823d]"  
      
    
  
/>
</div>
<div
  
    className= "flex flex-col items-start gap-3 md:gap-6 p-3 md:p-6 relative self-stretch w-full flex-[0_0_auto] bg-blue rounded-[14px] overflow-hidden" 

  

  

  

  


>
<Title
  
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        divClassName="!text-white"  
      
    
        prop="最新記事をお届け"  
      
    
  
/>
<Component5755
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        divClassName="!mt-[-1.00px] !text-white !text-sm !flex-1 ![white-space:unset] !font-normal !leading-[18.2px] !w-[unset]"  
      
    
        frameClassName="!self-stretch !flex !w-full"  
      
    
        hasDiv={ false } 
      
    
        hasDiv1={ false } 
      
    
        hasDiv2={ false } 
      
    
        prop="転職に役立つ最新情報をメールでお受け取りいただけます。"  
      
    
        visible={ false } 
      
    
  
/>
<InputDefault
  
    
        className="!self-stretch !left-[unset] !w-full !top-[unset]"  
      
    
        prop="メールアドレスを入力"  
      
    
        visible={ false } 
      
    
  
/>
<Btn
  
    
        text2="登録"  
      
    
        className="!left-[unset] !bg-pink !w-full md:!w-[254px] !top-[unset]"  
      
    
        iconLeft="off"  
      
    
        iconRight="on"  
      
    
        state="default"  
      
    
        type="fill"  
      
    
  
/>
</div>
<div
  
    className= "flex flex-col items-start gap-3 md:gap-6 p-3 md:p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px] overflow-hidden" 

  

  

  

  


>
<Title
  
    
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"  
      
    
        prop="カテゴリ一覧"  
      
    
  
/>
<Frame13
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        text="転職ノウハウ"  
      
    
        text1="18件"  
      
    
  
/>
<img
  
    className= "relative self-stretch w-full h-px object-cover" 

  

  

  alt="Line"
src="/img/line-9-1.svg"


  


/>
<Frame13
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        text="年収・給与"  
      
    
        text1="12件"  
      
    
  
/>
<img
  
    className= "relative self-stretch w-full h-px object-cover" 

  

  

  alt="Line"
src="/img/line-9-1.svg"


  


/>
<Frame13
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        text="業界動向"  
      
    
        text1="8件"  
      
    
  
/>
<img
  
    className= "relative self-stretch w-full h-px object-cover" 

  

  

  alt="Line"
src="/img/line-9-1.svg"


  


/>
<Frame13
  
    
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"  
      
    
        text="資格・スキル"  
      
    
        text1="10件"  
      
    
  
/>
</div>
</div>
)
}



