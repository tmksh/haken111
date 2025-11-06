
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
  
    Chatcircledots2  
    
   }

from
"../../../../icons/Chatcircledots2"
import 

 
 { 
  
    Userlist1  
    
   }

from
"../../../../icons/Userlist1"

export const Cta = () => {
  
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
  
    className= "flex flex-col h-auto md:h-[523px] items-center gap-4 md:gap-2.5 px-4 md:px-[415px] py-6 md:py-14 relative self-stretch w-full bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]" 

  

  

  

  


>
<img
  
    className= "absolute top-0 left-0 w-full h-full object-cover hidden md:block" 

  

  

  alt="Image"
src="/img/image-3.png"


  


/>
<img
  
    className= "absolute top-0 left-0 w-full h-full object-cover hidden md:block" 

  

  

  alt="Image"
src="/img/1.png"


  


/>
<div
  
    className= "flex flex-col w-full max-w-[610px] items-center gap-6 md:gap-14 relative flex-[0_0_auto] z-10" 

  

  

  

  


>
<div
  
    className= "flex flex-col items-center gap-6 md:gap-8 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "flex flex-col items-center gap-3 md:gap-4 relative self-stretch w-full flex-[0_0_auto]" 

  

  

  

  


>
<div
  
    className= "self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-white text-xl md:text-2xl lg:text-4xl text-center leading-[28px] md:leading-[32px] lg:leading-[46.8px] relative tracking-[0]" 

  

  

  

  


>
派遣会社のプロが<br/>あなたのキャリアを全力サポート
</div>
<div
  
    className= "self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base lg:text-lg text-center leading-[20px] md:leading-[24px] lg:leading-[28.8px] relative tracking-[0] px-2 md:px-0" 

  

  

  

  


>
業界最大級の求人数と転職成功実績で、理想の職場への転職を実現します。<br/>まずは無料登録で限定求人をチェックしてみませんか？
</div>
</div>
<div
  
    className= "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 relative flex-[0_0_auto] w-full px-2 md:px-0" 

  

  

  

  


>
<div
  
    className= "flex items-center gap-1.5 md:gap-2 relative flex-[0_0_auto] justify-center"
  

  

  

  

  

>
<img
  
    className= "relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 aspect-[1] flex-shrink-0"

  

  

  alt="Free"
src="/img/free-5786110-1.svg"


  


/>
<div
  
    className= "w-fit [font-family:'Inter',Helvetica] font-medium text-white text-xs md:text-sm lg:text-base leading-4 whitespace-nowrap relative tracking-[0]" 

  

  

  

  


>
完全無料
</div>
</div>
<div
  
    className= "flex items-center gap-1.5 md:gap-2 relative flex-[0_0_auto] justify-center" 

  

  

  

  


>
<img
  
    className= "relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 aspect-[1] flex-shrink-0" 

  

  

  alt="Mark"
src="/img/mark-14796358.svg"


  


/>
<div
  
    className= "w-fit [font-family:'Inter',Helvetica] font-medium text-white text-xs md:text-sm lg:text-base leading-4 whitespace-nowrap relative tracking-[0]" 

  

  

  

  


>
個人情報保護
</div>
</div>
<div
  
    className= "flex items-center gap-1.5 md:gap-2 relative flex-[0_0_auto] justify-center"
  

  

  

  

  

>
<div
  
    className= "relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 aspect-[1] flex-shrink-0"

  

  

  

  


>
<img
  
    className= "absolute w-[61.33%] h-[40.23%] top-[5.08%] left-[19.14%]" 

  

  

  alt="Vector"
src="/img/vector-1.svg"


  


/>
<img
  
    className= "absolute w-[70.12%] h-[54.30%] top-[40.43%] left-[14.84%]" 

  

  

  alt="Vector"
src="/img/vector-2.svg"


  


/>
<img
  
    className= "absolute w-[10.55%] h-[54.30%] top-[40.43%] left-[74.41%]" 

  

  

  alt="Vector"
src="/img/vector-3.svg"


  


/>
<img
  
    className= "absolute w-[19.34%] h-[31.45%] top-[50.98%] left-[40.23%]" 

  

  

  alt="Vector"
src="/img/vector-4.svg"


  


/>
</div>
<div
  
    className= "w-fit [font-family:'Inter',Helvetica] font-medium text-white text-xs md:text-sm lg:text-base leading-4 whitespace-nowrap relative tracking-[0]" 

  

  

  

  


>
秘密厳守
</div>
</div>
<div
  
    className= "flex items-center gap-1.5 md:gap-2 relative flex-[0_0_auto] justify-center" 

  

  

  

  


>
<img
  
    className= "relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 aspect-[1] flex-shrink-0" 

  

  

  alt="Clock"
src="/img/clock-206372.svg"


  


/>
<div
  
    className= "w-fit [font-family:'Inter',Helvetica] font-medium text-white text-xs md:text-sm lg:text-base leading-4 whitespace-nowrap relative tracking-[0]" 

  

  

  

  


>
24時間受付
</div>
</div>
<div
  
    className= "flex items-center gap-1.5 md:gap-2 relative flex-[0_0_auto] justify-center"
  

  

  

  

  

>
<img
  
    className= "relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 aspect-[1] flex-shrink-0"

  

  

  alt="Calendar"
src="/img/calendar-9018477.svg"


  


/>
<div
  
    className= "w-fit [font-family:'Inter',Helvetica] font-medium text-white text-xs md:text-sm lg:text-base leading-4 whitespace-nowrap relative tracking-[0]" 

  

  

  

  


>
土日祝対応
</div>
</div>
<div
  
    className= "flex items-center gap-1.5 md:gap-2 relative flex-[0_0_auto] justify-center" 

  

  

  

  


>
<img
  
    className= "relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 aspect-[1] flex-shrink-0" 

  

  

  alt="Trophy"
src="/img/trophy-295767.svg"


  


/>
<div
  
    className= "relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-xs md:text-sm lg:text-base tracking-[0] leading-4 whitespace-nowrap" 

  

  

  

  


>
業界No.1実績
</div>
</div>
</div>
</div>
<div
  
    className= "flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-6 relative flex-[0_0_auto] w-full md:w-auto px-4 md:px-0" 

  

  

  

  


>
<Btn
  
    
        text7="簡単30秒で無料登録する"  
      
    
        className="!border-pink !justify-center !left-[unset] !w-full md:!w-[258px] !top-[unset]"  
      
    
        divClassNameOverride="!text-pink !flex-[unset] !whitespace-nowrap ![font-family:'Inter',Helvetica] !leading-[19.2px] !w-fit"  
      
    
        icon={ <Userlist1
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        iconLeft="on"  
      
    
        iconRight="off"  
      
    
        state="default"  
      
    
        type="outline"  
      
    
        onClick={handleScrollToTop}
  
/>
<Btn
  
    
        className="!justify-center !left-[unset] !bg-pink !w-full md:!w-[258px] !top-[unset]"  
      
    
        divClassNameOverride="!flex-[unset] !whitespace-nowrap !w-fit"  
      
    
        icon={ <Chatcircledots2
  
    
        className="!relative !w-4 !h-4 !aspect-[1]"  
      
    
  
/> } 
      
    
        iconLeft="on"  
      
    
        iconRight="off"  
      
    
        prop="プロに相談したい"  
      
    
        state="default"  
      
    
        to="/u36578u32887u30456u35527u12504u12442u12540u12471u12441"  
      
    
        type="fill"  
      
    
  
/>
</div>
</div>
</div>
)
}



