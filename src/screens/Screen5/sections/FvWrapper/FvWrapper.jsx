import React from "react";

export const FvWrapper = () => {
  return (
    <div className="absolute top-20 left-0 w-[1441px] h-[564px]">
      <img
        className="w-[1439px] h-[544px] absolute top-0 left-0"
        alt="Image"
        src="/img/1-2.png"
      />

      <div className="flex flex-col w-[713px] items-start gap-[7px] absolute top-[470px] left-20">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-[10px] text-justify tracking-[0] leading-[12.0px]">
          ※相談内容は承諾なく就業先、営業担当・コーディネーターなどに伝わることはないので、安心してご相談ください。
        </div>

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-[10px] text-justify tracking-[0] leading-[12.0px]">
          ※オンライン面談が可能なため、ご自宅から利用いただけます
        </div>
      </div>

      <img
        className="absolute top-[67px] left-[810px] w-[548px] h-[497px]"
        alt="Img"
        src="/img/img.png"
      />

      <div className="absolute top-[110px] left-[70px] w-[792px] h-[203px]">
        <p className="absolute -top-0.5 left-[23px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[155.4px] leading-[202.9px] whitespace-nowrap">
          <span className="tracking-[0]">完全無</span>

          <span className="tracking-[-45.87px]">料</span>

          <span className="tracking-[0]">！</span>
        </p>

        <p className="absolute top-0 left-4 [-webkit-text-stroke:1.29px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-transparent text-[155.4px] leading-[202.9px] whitespace-nowrap border-white">
          <span className="text-[#e18194] tracking-[0]">完</span>

          <span className="text-[#e8d97c] tracking-[0]">全</span>

          <span className="text-[#89b929] tracking-[0]">無</span>

          <span className="text-[#11a5b1] tracking-[-45.87px]">料</span>

          <span className="text-[#222222] tracking-[0]">！</span>
        </p>
      </div>

      <div className="absolute top-[324px] left-20 w-[721px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[37.5px] tracking-[0] leading-[46.8px]">
        現役の企業人事スタッフによる、
        <br />
        ベストなキャリア選択で望んだ就職先を！
      </div>
    </div>
  );
};
