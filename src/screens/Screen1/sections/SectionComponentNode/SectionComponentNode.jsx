import React, { useEffect, useState } from "react";

export const SectionComponentNode = () => {
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
          baseWidth = 643;
          minScale = 0.50;
          maxScale = 0.55;
        } else if (width <= 375) {
          // 小さい端末（360-375px、iPhone SEなど）
          padding = 24;
          baseWidth = 643;
          minScale = 0.52;
          maxScale = 0.58;
        } else if (width <= 390) {
          // 標準的な端末（375-390px、iPhone 12/13/14など）
          padding = 28;
          baseWidth = 643;
          minScale = 0.55;
          maxScale = 0.62;
        } else if (width <= 428) {
          // 大きい端末（390-428px、iPhone Pro Maxなど）
          padding = 32;
          baseWidth = 643;
          minScale = 0.60;
          maxScale = 0.68;
        } else {
          // 非常に大きい端末（428px以上）
          padding = 36;
          baseWidth = 643;
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
          baseWidth = 1044;
          minScale = 0.70;
          maxScale = 0.78;
        } else if (width <= 900) {
          // 中程度のタブレット（820-900px）
          padding = 45;
          baseWidth = 1044;
          minScale = 0.75;
          maxScale = 0.85;
        } else {
          // 大きいタブレット（900-1024px、iPad Proなど）
          padding = 50;
          baseWidth = 1044;
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
      <div className="bg-[#ffffff] overflow-hidden w-full relative pt-4 md:hidden flex justify-center" style={{ height: `${16 + (92 + 219.73 + 53.3 + 360.74) * mobileScale + 90}px` }}>
        <div 
          style={{
            width: '643px',
            height: '846px',
            transform: `scale(${mobileScale})`,
            transformOrigin: 'top left',
            position: 'relative'
          }}
        >
          <img
            className="absolute -top-0.5 left-px w-[643px] h-[846px]"
            alt="Frame"
            src="/img/frame-1000004000.svg"
          />

          <img
            className="absolute w-[544px] h-[533px] top-[307px] left-24"
            alt="Fv"
            src="/img/fv.png"
          />

          <div className="absolute top-[92px] left-[-61px] w-[908px] h-[425px] flex flex-col gap-[53.3px]">
            <div className="flex ml-[78px] w-[661.83px] h-[219.73px] relative flex-col items-start gap-[5.1px]">
              <div className="relative w-[611.06px] h-[174.63px]">
                <div className="left-[234px] w-[377px] h-[114px] absolute top-0">
                  <div className="-top-px left-[13px] text-[87.5px] leading-[114.2px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    派遣人材
                  </div>

                  <p className="left-[9px] [-webkit-text-stroke:0.73px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-transparent text-[87.5px] tracking-[0] leading-[114.2px] whitespace-nowrap absolute top-0 border-white">
                    <span className="text-[#e18194]">派</span>
                    <span className="text-[#e8d97c]">遣</span>
                    <span className="text-[#89b929]">人</span>
                    <span className="text-[#11a5b1]">材</span>
                  </p>
                </div>

                <div className="absolute top-0 left-0.5 w-[202px] h-[114px]">
                  <div className="-top-px left-[13px] text-[87.5px] leading-[114.2px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    優秀
                  </div>

                  <div className="left-[9px] [-webkit-text-stroke:0.73px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[87.5px] tracking-[0] leading-[114.2px] whitespace-nowrap absolute top-0 border-white">
                    優秀
                  </div>
                </div>

                <div className="top-[42px] left-[190px] text-[53.9px] leading-[70.4px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                  な
                </div>

                <div className="absolute top-[104px] left-[5px] [-webkit-text-stroke:0.73px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[53.9px] tracking-[0] leading-[70.4px] whitespace-nowrap border-white">
                  との出会いを確実に。
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-[7.29px] pl-[11.66px] pr-0 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.73px] [text-shadow:0.73px_0.73px_0px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[16.8px] tracking-[0] leading-[normal]">
                  派遣領域に特化しており求めていた人材を獲得できる求人プラットフォーム。
                  <br />
                  質の高い候補者との効率的なマッチングを実現します。
                </div>
              </div>
            </div>

            <div className="inline-flex ml-[76px] w-[278px] h-[360.74px] relative flex-col items-start justify-center gap-[31.31px] pl-[20.04px] pr-0 py-0">
              <div className="relative w-[233.67px] h-[99.34px]">
                <p className="absolute top-5 left-[37px] h-[74px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[33.8px] text-center leading-[37.2px]">
                  <span className="tracking-[0]">初</span>
                  <span className="tracking-[-3.09px]">期・</span>
                  <span className="tracking-[0]">
                    掲載
                    <br />
                  </span>
                  <span className="text-[25px] tracking-[0] leading-[27.5px]">
                    費用
                  </span>
                  <span className="text-[33.9px] tracking-[0] leading-[37.3px]">
                    0
                  </span>
                  <span className="text-[25px] tracking-[0] leading-[27.5px]">
                    円
                  </span>
                </p>

                <img
                  className="absolute top-2.5 left-0 w-[45px] h-[89px] aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[187px] absolute top-2.5 w-[45px] h-[89px] aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-[46px] w-[131px] h-3.5"
                  alt="Group"
                  src="/img/group-9283.png"
                />
              </div>

              <div className="relative w-[233.67px] h-[99.45px]">
                <img
                  className="absolute top-2.5 left-0 w-[45px] h-[89px] aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[187px] absolute top-2.5 w-[45px] h-[89px] aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-[50px] w-[131px] h-3.5"
                  alt="Group"
                  src="/img/group-9284.png"
                />

                <p className="left-[47px] w-[136px] h-[75px] flex items-center justify-center absolute top-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[33.8px] text-center tracking-[0] leading-[37.2px]">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[33.8px] tracking-[0] leading-[37.2px]">
                    成果報酬
                    <br />
                  </span>
                  <span className="text-[25px] leading-[27.5px]">のみ</span>
                </p>
              </div>

              <div className="relative w-[259.96px] h-[99.34px] mr-[-2.00px]">
                <img
                  className="absolute top-2.5 left-0 w-[45px] h-[89px] aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[213px] absolute top-2.5 w-[45px] h-[89px] aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-[69px] w-[131px] h-3.5"
                  alt="Group"
                  src="/img/group-9285.png"
                />

                <p className="left-[54px] absolute top-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[33.8px] text-center tracking-[0] leading-[37.2px]">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[33.8px] tracking-[0] leading-[37.2px]">
                    派遣特化
                  </span>
                  <span className="text-[25px] leading-[27.5px]">
                    で<br />
                  </span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[33.8px] tracking-[0] leading-[37.2px]">
                    人材
                  </span>
                  <span className="text-[25px] leading-[27.5px]">の</span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[33.8px] tracking-[0] leading-[37.2px]">
                    宝庫
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* タブレット版: デスクトップのソースコードを使用 - TOPページと同じパターン */}
      <div className="bg-[#ffffff] overflow-hidden w-full relative pt-20 hidden md:block lg:hidden flex justify-center" style={{ minHeight: `${1373 * tabletScale}px` }}>
        <div
          style={{
            width: '1044px',
            height: '1373px',
            transform: `scale(${tabletScale})`,
            transformOrigin: 'top left',
            position: 'relative'
          }}
        >
          <img
            className="absolute -top-1 left-px w-[1044px] h-[1373px]"
            alt="Frame"
            src="/img/frame-1000004000.svg"
          />

          <img
            className="absolute w-[883px] h-[865px] top-[498px] left-[156px]"
            alt="Fv"
            src="/img/fv.png"
          />

          <div className="absolute top-[149px] left-[-99px] w-[1474px] h-[690px] flex flex-col gap-[85px]">
            <div className="flex ml-[126.6px] w-[1074.19px] h-[358.09px] relative mt-0 flex-col items-start gap-[8.28px]">
              <div className="relative w-[989.29px] h-[283.81px]">
                <div className="absolute top-px left-[380px] w-[609px] h-[185px]">
                  <div className="-top-px left-[21px] text-[142px] leading-[185.4px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    派遣人材
                  </div>

                  <p className="absolute top-0 left-[15px] [-webkit-text-stroke:1.18px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-transparent text-[142px] tracking-[0] leading-[185.4px] whitespace-nowrap border-white">
                    <span className="text-[#e18194]">派</span>
                    <span className="text-[#e8d97c]">遣</span>
                    <span className="text-[#89b929]">人</span>
                    <span className="text-[#11a5b1]">材</span>
                  </p>
                </div>

                <div className="absolute top-px left-[3px] w-[325px] h-[185px]">
                  <div className="-top-px left-[21px] text-[142px] leading-[185.4px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    優秀
                  </div>

                  <div className="absolute top-0 left-[15px] [-webkit-text-stroke:1.18px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[142px] tracking-[0] leading-[185.4px] whitespace-nowrap border-white">
                    優秀
                  </div>
                </div>

                <div className="top-[69px] left-[309px] text-[87.5px] leading-[114.3px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                  な
                </div>

                <div className="absolute top-[169px] left-[9px] [-webkit-text-stroke:1.18px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[87.5px] tracking-[0] leading-[114.3px] whitespace-nowrap border-white">
                  との出会いを確実に。
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-[11.83px] pl-[18.93px] pr-0 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.18px] [text-shadow:1.18px_1.18px_0px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[27.2px] tracking-[0] leading-[normal]">
                  派遣領域に特化しており求めていた人材を獲得できる求人プラットフォーム。
                  <br />
                  質の高い候補者との効率的なマッチングを実現します。
                </div>
              </div>
            </div>

            <div className="inline-flex ml-[123.4px] w-[451.21px] h-[585.5px] relative flex-col items-start justify-center gap-[50.81px] pl-[32.52px] pr-0 py-0">
              <div className="relative w-[378.01px] h-[161.23px]">
                <p className="absolute top-8 left-[61px] h-[122px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[54.9px] text-center leading-[60.4px]">
                  <span className="tracking-[0]">初</span>
                  <span className="tracking-[-8.13px]">期・</span>
                  <span className="tracking-[0]">
                    掲載
                    <br />
                  </span>
                  <span className="text-[40.6px] tracking-[0] leading-[44.7px]">
                    費用
                  </span>
                  <span className="text-[55px] tracking-[0] leading-[60.6px]">
                    0
                  </span>
                  <span className="text-[40.6px] tracking-[0] leading-[44.7px]">
                    円
                  </span>
                </p>

                <img
                  className="absolute top-[17px] left-0 w-[73px] h-36 aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[303px] absolute top-[17px] w-[73px] h-36 aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-[75px] w-[213px] h-[22px]"
                  alt="Group"
                  src="/img/group-9283.png"
                />
              </div>

              <div className="relative w-[378.01px] h-[161.41px]">
                <img
                  className="absolute top-[17px] left-0 w-[73px] h-36 aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[303px] absolute top-[17px] w-[73px] h-36 aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-[81px] w-[213px] h-[22px]"
                  alt="Group"
                  src="/img/group-9284.png"
                />

                <p className="left-[77px] w-[222px] h-[122px] flex items-center justify-center absolute top-10 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[54.9px] text-center tracking-[0] leading-[60.4px]">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[54.9px] tracking-[0] leading-[60.4px]">
                    成果報酬
                    <br />
                  </span>
                  <span className="text-[40.6px] leading-[44.7px]">のみ</span>
                </p>
              </div>

              <div className="relative w-[420.69px] h-[161.23px] mr-[-2.00px]">
                <img
                  className="absolute top-[17px] left-0 w-[73px] h-36 aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[346px] absolute top-[17px] w-[73px] h-36 aspect-[0.51]"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-28 w-[213px] h-[22px]"
                  alt="Group"
                  src="/img/group-9285.png"
                />

                <p className="left-[87px] absolute top-10 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[54.9px] text-center tracking-[0] leading-[60.4px]">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[54.9px] tracking-[0] leading-[60.4px]">
                    派遣特化
                  </span>
                  <span className="text-[40.6px] leading-[44.7px]">
                    で<br />
                  </span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[54.9px] tracking-[0] leading-[60.4px]">
                    人材
                  </span>
                  <span className="text-[40.6px] leading-[44.7px]">の</span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[54.9px] tracking-[0] leading-[60.4px]">
                    宝庫
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PC版: TOPページのFVと同じ背景画像設定を適用 */}
      <div className="relative w-full hidden lg:block lg:absolute lg:top-0 lg:left-0 z-0" style={{ height: '624px' }}>
        {/* 背景画像2 */}
        <img
          className="absolute top-20 left-0 w-full h-[544px]"
          alt="Image"
          src="/img/image-2.png"
        />

        {/* 背景画像1 */}
        <img
          className="absolute top-0 left-0 w-full h-[624px]"
          alt="Image"
          src="/img/image.png"
        />

        <div className="relative w-full px-0 pt-0">
          <div className="flex flex-col w-[908px] items-start gap-8 absolute top-[165px] left-[95px]">
            <div className="flex flex-col items-start gap-[7px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[836.84px] h-[240.53px]">
                {/* 派遣人材 */}
                <div className="left-[322px] w-[515px] h-[157px] absolute top-0">
                  <div className="-top-px left-[18px] text-[120px] leading-[156.7px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    派遣人材
                  </div>

                  <p className="left-[13px] [text-shadow:3px_3px_0px_rgba(0,0,0,0.4)] [font-family:'Noto_Sans_JP',Helvetica] font-black text-[120px] tracking-[0] leading-[156.7px] whitespace-nowrap absolute top-0">
                    <span className="text-[#e18194]">派</span>
                    <span className="text-[#e8d97c]">遣</span>
                    <span className="text-[#89b929]">人</span>
                    <span className="text-[#11a5b1]">材</span>
                  </p>
                </div>

                {/* 優秀 */}
                <div className="absolute top-0 left-[3px] w-[275px] h-[157px]">
                  <div className="-top-px left-[18px] text-[120px] leading-[156.7px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    優秀
                  </div>

                  <div className="left-[13px] [text-shadow:3px_3px_0px_rgba(0,0,0,0.4)] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[120px] tracking-[0] leading-[156.7px] whitespace-nowrap absolute top-0">
                    優秀
                  </div>
                </div>

                {/* な */}
                <div className="top-[58px] left-[261px] [text-shadow:3px_3px_0px_rgba(0,0,0,0.4)] text-[74px] leading-[96.6px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                  な
                </div>

                {/* との出会いを確実に。 */}
                <div className="absolute top-[143px] left-[7px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[74px] tracking-[0] leading-[96.6px] whitespace-nowrap">
                  との出会いを確実に。
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-2.5 pl-4 pr-0 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [text-shadow:1px_1px_0px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[23px] tracking-[0] leading-[normal]">
                  派遣領域に特化しており求めていた人材を獲得できる求人プラットフォーム。
                  <br />
                  質の高い候補者との効率的なマッチングを実現します。
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-[25px] pl-0 pr-0 py-0 relative flex-[0_0_auto]">
              {/* 初期・掲載費用0円 */}
              <div className="relative w-[187px] h-[79.33px]">
                <img
                  className="absolute top-2 left-0 w-9 h-[71px] aspect-[0.51] z-0"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[149px] absolute top-2 w-9 h-[71px] aspect-[0.51] z-0"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-[37px] w-[105px] h-[11px] z-10"
                  alt="Group"
                  src="/img/group-9283.png"
                />
                
                <p className="absolute top-[18px] left-0 w-full [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[22px] text-center leading-[28px] z-20">
                  初期・掲載<br />費用0円
                </p>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#89b929] rounded-full z-30"></div>
              </div>

              {/* 成果報酬のみ */}
              <div className="relative w-[187px] h-[79.42px]">
                <img
                  className="absolute top-2 left-0 w-9 h-[71px] aspect-[0.51] z-0"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[149px] absolute top-2 w-9 h-[71px] aspect-[0.51] z-0"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-10 w-[105px] h-[11px] z-10"
                  alt="Group"
                  src="/img/group-9284.png"
                />

                <p className="absolute top-[18px] left-0 w-full [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[22px] text-center leading-[28px] z-20">
                  成果報酬<br />のみ
                </p>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#e18194] rounded-full z-30"></div>
              </div>

              {/* 派遣特化で人材の宝庫 */}
              <div className="relative w-[187px] h-[79.42px]">
                <img
                  className="absolute top-2 left-0 w-9 h-[71px] aspect-[0.51] z-0"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-4.png"
                />

                <img
                  className="left-[149px] absolute top-2 w-9 h-[71px] aspect-[0.51] z-0"
                  alt="Pngtreeelegant"
                  src="/img/pngtree-elegant-golden-laurel-wreath-design-19167063-5.png"
                />

                <img
                  className="absolute top-0 left-[41px] w-[105px] h-[11px] z-10"
                  alt="Group"
                  src="/img/group-9285.png"
                />

                <p className="absolute top-[18px] left-0 w-full [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[22px] text-center leading-[28px] z-20">
                  派遣特化で<br />人材の宝庫
                </p>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#11a5b1] rounded-full z-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
