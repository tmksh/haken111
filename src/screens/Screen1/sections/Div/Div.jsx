
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
  
    News11450713_3  
    
   }

from
"../../../../icons/News11450713_3"
import 

 
 { 
  
    Note3  
    
   }

from
"../../../../icons/Note3"

export const Div = () => {
  

  return (
    <div
  
    className= "w-[1018px] justify-center gap-2.5 px-10 py-14 relative flex-[0_0_auto] bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)] flex flex-col items-center" 

  

  

  

  


>
<img
  
    className= "absolute top-0 left-0 w-[1017px] h-[339px]" 

  

  

  alt="Image"
src="/img/4.png"


  


/>
<img
  
    className= "absolute top-0 left-0 w-[1017px] h-[339px]" 

  

  

  alt="Image"
src="/img/5.png"


  


/>
<div
  
    className= "flex flex-col w-[610px] items-center gap-14 relative flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-white text-4xl text-center tracking-[0] leading-[46.8px]" 

  

  

  

  


>
あなたの企業も掲載してみませんか？
</div>
<div
  
    className= "relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[28.8px]" 

  

  

  

  


>
初期費用・掲載費用は完全無料。<br/>成功報酬制で安心してご利用いただけます。
</div>
</div>
<div
  
    className= "flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<Btn
  
    
        7="資料請求"  
      
    
        className="!border-pink !left-[unset] !justify-center !flex-1 !grow !w-[unset] !top-[unset]"  
      
    
        divClassName="!text-pink !flex-[unset] !whitespace-nowrap ![font-family:'Inter',Helvetica] !leading-[19.2px] !w-fit"  
      
    
        icon={ <Note3
  
    
        className="!w-4 !h-4 !relative !aspect-[1]"  
      
    
        color="#E18194"  
      
    
  
/> } 
      
    
        iconLeft="on"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="outline"  
      
    
  
/>
<Btn
  
    
        className="!left-[unset] !justify-center !flex-1 !grow !bg-pink !w-[unset] !top-[unset]"  
      
    
        divClassName="!flex-[unset] !whitespace-nowrap !w-fit"  
      
    
        icon={ <News11450713_3
  
    
        className="!relative !w-4 !h-4"  
      
    
        color="white"  
      
    
  
/> } 
      
    
        iconLeft="on"  
      
    
        iconRight="off"  
      
    
        prop="無料で掲載を開始"  
      
    
        state="default"  
      
    
        type="fill"  
      
    
  
/>
</div>
</div>
</div>
)
}



