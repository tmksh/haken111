import React, { useEffect, useState } from "react";

export const FvWrapper = () => {
  const [mobileScale, setMobileScale] = useState(0.84);
  const [tabletScale, setTabletScale] = useState(0.90);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        // スマホ: 画面幅に応じて細かくスケール調整
        let padding, baseWidth, minScale, maxScale;
        
        if (width <= 360) {
          // 非常に小さい端末（320-360px）
          padding = 20;
          baseWidth = 640;
          minScale = 0.50;
          maxScale = 0.55;
        } else if (width <= 375) {
          // 小さい端末（360-375px、iPhone SEなど）
          padding = 24;
          baseWidth = 640;
          minScale = 0.52;
          maxScale = 0.58;
        } else if (width <= 390) {
          // 標準的な端末（375-390px、iPhone 12/13/14など）
          padding = 28;
          baseWidth = 640;
          minScale = 0.55;
          maxScale = 0.62;
        } else if (width <= 428) {
          // 大きい端末（390-428px、iPhone Pro Maxなど）
          padding = 32;
          baseWidth = 640;
          minScale = 0.60;
          maxScale = 0.68;
        } else {
          // 非常に大きい端末（428px以上）
          padding = 36;
          baseWidth = 640;
          minScale = 0.65;
          maxScale = 0.75;
        }
        
        const targetWidth = width - padding;
        const scale = Math.min(maxScale, Math.max(minScale, targetWidth / baseWidth));
        setMobileScale(scale);
      } else if (width >= 768 && width < 1024) {
        // タブレット: 画面幅に応じて細かくスケール調整
        let padding, baseWidth, minScale, maxScale;
        
        if (width <= 820) {
          // 小さいタブレット（768-820px、iPad Miniなど）
          padding = 40;
          baseWidth = 1040;
          minScale = 0.70;
          maxScale = 0.78;
        } else if (width <= 900) {
          // 中程度のタブレット（820-900px）
          padding = 45;
          baseWidth = 1040;
          minScale = 0.75;
          maxScale = 0.85;
        } else {
          // 大きいタブレット（900-1024px、iPad Proなど）
          padding = 50;
          baseWidth = 1040;
          minScale = 0.80;
          maxScale = 0.92;
        }
        
        const targetWidth = width - padding;
        const scale = Math.min(maxScale, Math.max(minScale, targetWidth / baseWidth));
        setTabletScale(scale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <>
      {/* スマホ版: デスクトップのソースコードを使用 - TOPページと同じパターン */}
      <div className="bg-[#ffffff] overflow-hidden w-full relative pt-4 md:hidden flex justify-center" style={{ height: `${16 + (795 + 23.27) * mobileScale}px` }}>
        <div 
          style={{
            width: '640px',
            height: '841px',
            transform: `scale(${mobileScale})`,
            transformOrigin: 'top left',
            position: 'relative'
          }}
        >
          <img
            className="absolute top-0 left-px w-[640px] h-[841px]"
            alt="Frame"
            src="/img/frame-1000004000.svg"
          />

          <img
            className="absolute top-[363px] left-[116px] w-[412px] h-[374px]"
            alt="Frame"
            src="/img/frame-1000003999.svg"
          />

          <div className="absolute top-20 left-[49px] w-[581px] h-[153px] flex">
            <div className="mt-0 w-[599.77px] h-[152.33px] ml-0 relative">
              <p className="absolute -top-px left-[17px] w-[565px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[116.9px] leading-[152.6px] whitespace-nowrap">
                <span className="tracking-[0]">完全無</span>

                <span className="tracking-[-25.95px]">料</span>

                <span className="tracking-[0]">！</span>
              </p>

              <p className="absolute top-0 left-3 w-[565px] [-webkit-text-stroke:0.97px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-transparent text-[116.9px] leading-[152.6px] whitespace-nowrap border-white">
                <span className="text-[#e18194] tracking-[0]">完</span>

                <span className="text-[#e8d97c] tracking-[0]">全</span>

                <span className="text-[#89b929] tracking-[0]">無</span>

                <span className="text-[#11a5b1] tracking-[-25.95px]">料</span>

                <span className="text-[#222222] tracking-[0]">！</span>
              </p>
            </div>
          </div>

          <div className="absolute top-[257px] left-[54px] w-[539px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[28.2px] tracking-[0] leading-[35.2px]">
            現役の企業人事スタッフによる、
            <br />
            ベストなキャリア選択で望んだ就職先を！
          </div>

          <div className="absolute top-[795px] left-[49px] w-[524px] h-[23px] flex">
            <div className="flex w-[536.34px] h-[23.27px] relative flex-col items-start gap-[5.27px]">
              <div className="relative self-stretch mt-[-0.75px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-[7.5px] text-justify tracking-[0] leading-[9.0px]">
                ※相談内容は承諾なく就業先、営業担当・コーディネーターなどに伝わることはないので、安心してご相談ください。
              </div>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-[7.5px] text-justify tracking-[0] leading-[9.0px]">
                ※オンライン面談が可能なため、ご自宅から利用いただけます
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* タブレット版: デスクトップのソースコードを使用 - TOPページと同じパターン */}
      <div className="bg-[#ffffff] overflow-hidden w-full relative pt-20 hidden md:block lg:hidden flex justify-center" style={{ height: `${(1292 + 38.55) * tabletScale}px` }}>
        <div 
          style={{
            width: '1040px',
            height: '1366.3px',
            transform: `scale(${tabletScale})`,
            transformOrigin: 'top left',
            position: 'relative'
          }}
        >
          <img
            className="absolute top-0 left-px w-[1039px] h-[1366px]"
            alt="Frame"
            src="/img/frame-1000004000.svg"
          />

          <img
            className="absolute top-[589px] left-[188px] w-[670px] h-[607px]"
            alt="Frame"
            src="/img/frame-1000003999.svg"
          />

          <div className="absolute top-[131px] left-[79px] w-[943px] h-[248px] flex">
            <div className="mt-0 w-[971.9px] h-[247.48px] ml-0 relative">
              <p className="absolute -top-0.5 left-7 w-[918px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[189.9px] leading-[248.0px] whitespace-nowrap">
                <span className="tracking-[0]">完全無</span>

                <span className="tracking-[-68.50px]">料</span>

                <span className="tracking-[0]">！</span>
              </p>

              <p className="absolute top-0 left-5 w-[918px] [-webkit-text-stroke:1.58px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-transparent text-[189.9px] leading-[248.0px] whitespace-nowrap border-white">
                <span className="text-[#e18194] tracking-[0]">完</span>

                <span className="text-[#e8d97c] tracking-[0]">全</span>

                <span className="text-[#89b929] tracking-[0]">無</span>

                <span className="text-[#11a5b1] tracking-[-68.50px]">料</span>

                <span className="text-[#222222] tracking-[0]">！</span>
              </p>
            </div>
          </div>

          <div className="absolute top-[480px] left-[88px] w-[876px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[45.8px] tracking-[0] leading-[57.2px]">
            現役の企業人事スタッフによる、
            <br />
            ベストなキャリア選択で望んだ就職先を！
          </div>

          <div className="absolute top-[1292px] left-[79px] w-[851px] h-[38px] flex">
            <div className="flex w-[871.35px] h-[38.55px] relative flex-col items-start gap-[8.55px]">
              <div className="relative self-stretch mt-[-1.22px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-[12.2px] text-justify tracking-[0] leading-[14.7px]">
                ※相談内容は承諾なく就業先、営業担当・コーディネーターなどに伝わることはないので、安心してご相談ください。
              </div>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-[12.2px] text-justify tracking-[0] leading-[14.7px]">
                ※オンライン面談が可能なため、ご自宅から利用いただけます
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PC版: 転職相談専用FV - 元のコードを復元 */}
      <div className="relative w-full h-[380px] hidden lg:block">
        <img
          className="w-full h-[544px] object-cover absolute top-0 left-0"
          alt="Image"
          src="/img/1-2.png"
        />

        <div className="flex flex-col w-[713px] items-start gap-[7px] absolute top-[360px] left-20">
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
          <p className="absolute -top-0.5 left-[23px] [text-shadow:3px_3px_0px_rgba(0,0,0,0.4)] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[155.4px] leading-[202.9px] whitespace-nowrap">
            <span className="tracking-[0]">完全無</span>

            <span className="tracking-[-45.87px]">料</span>

            <span className="tracking-[0]">！</span>
          </p>

          <p className="absolute top-0 left-4 [text-shadow:3px_3px_0px_rgba(0,0,0,0.4)] [font-family:'Noto_Sans_JP',Helvetica] font-black text-[155.4px] leading-[202.9px] whitespace-nowrap">
            <span className="text-[#e18194] tracking-[0]">完</span>

            <span className="text-[#e8d97c] tracking-[0]">全</span>

            <span className="text-[#89b929] tracking-[0]">無</span>

            <span className="text-[#11a5b1] tracking-[-45.87px]">料</span>

            <span className="text-[#222222] tracking-[0]">！</span>
          </p>
        </div>

        <div className="absolute top-[340px] left-20 w-[721px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[37.5px] tracking-[0] leading-[46.8px]">
          現役の企業人事スタッフによる、
          <br />
          ベストなキャリア選択で望んだ就職先を！
        </div>
      </div>
    </>
  );
};
