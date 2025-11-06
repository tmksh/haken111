import React, { useEffect, useState } from "react";

export const Fv = () => {
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
        } else if (width <= 393) {
          // 標準的な端末（375-393px、iPhone 12/13/14/16など）
          padding = 32;
          baseWidth = 643;
          minScale = 0.54;
          maxScale = 0.60;
        } else if (width <= 428) {
          // 大きい端末（393-428px、iPhone Pro Maxなど）
          padding = 36;
          baseWidth = 643;
          minScale = 0.58;
          maxScale = 0.66;
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
          baseWidth = 1048;
          minScale = 0.70;
          maxScale = 0.78;
        } else if (width <= 900) {
          // 中程度のタブレット（820-900px）
          padding = 45;
          baseWidth = 1048;
          minScale = 0.75;
          maxScale = 0.85;
        } else {
          // 大きいタブレット（900-1024px、iPad Proなど）
          padding = 50;
          baseWidth = 1048;
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
      {/* スマホ版: 元のソースコード - 画面幅に応じて自動スケール */}
      <div className="bg-[#ffffff] overflow-hidden w-full relative pt-4 md:hidden flex justify-center" style={{ height: `${16 + (119 + 168.46 + 53.2 + 235.26) * mobileScale + 160}px` }}>
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

          <div className="flex flex-col w-[635px] items-start gap-[53.2px] absolute top-[119px] left-7">
            <div className="flex flex-col items-start gap-[4.9px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[632.81px] h-[168.46px]">
                <div className="absolute top-px left-[225px] w-[362px] h-[110px]">
                  <div className="-top-px left-3 text-[84px] leading-[109.7px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    優良求人
                  </div>

                  <p className="absolute top-0 left-[9px] [-webkit-text-stroke:0.7px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-transparent text-[84px] tracking-[0] leading-[109.7px] whitespace-nowrap border-white">
                    <span className="text-[#e18194]">優</span>
                    <span className="text-[#e8d97c]">良</span>
                    <span className="text-[#89b929]">求</span>
                    <span className="text-[#11a5b1]">人</span>
                  </p>
                </div>

                <div className="absolute top-px left-0.5 w-[194px] h-[110px]">
                  <div className="-top-px left-3 text-[84px] leading-[109.7px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    派遣
                  </div>

                  <div className="absolute top-0 left-[9px] [-webkit-text-stroke:0.7px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[84px] tracking-[0] leading-[109.7px] whitespace-nowrap border-white">
                    派遣
                  </div>
                </div>

                <div className="top-[41px] left-[183px] text-[51.8px] leading-[67.6px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                  の
                </div>

                <div className="absolute top-[101px] left-1.5 [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[51.8px] tracking-[0] leading-[67.6px] whitespace-nowrap">
                  あなたにジャストマッチ。
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-[7px] pl-[7px] pr-0 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.70px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[16.8px] tracking-[0] leading-[normal] whitespace-nowrap">
                  物流・製造から夜勤まで、未経験でも安心して始められる案件多数。
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start justify-center gap-[23.58px] pl-[13.9px] pr-0 py-0 relative flex-[0_0_auto]">
              <div className="h-[72.15px] flex w-[235.26px] items-center relative">
                <img
                  className="mb-[-5.56px] ml-[-2.78px] relative w-[41.63px] h-[77.71px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
                />

                <div className="relative w-fit ml-[-6.27px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[37.5px] tracking-[0] leading-[normal] whitespace-nowrap">
                  未経験OK
                </div>

                <img
                  className="mb-[-5.56px] mr-[-2.93px] ml-[-6.27px] relative w-[41.63px] h-[77.71px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
                />
              </div>

              <div className="justify-center gap-[6.27px] flex-[0_0_auto] flex w-[235.26px] items-center relative">
                <img
                  className="relative w-[41.63px] h-[77.71px] mb-[-3.72px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
                />

                <p className="mt-[-2.15px] text-[37.6px] tracking-[0] leading-[36.1px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[37.6px] tracking-[0] leading-[36.1px]">
                    高時給
                    <br />
                  </span>
                  <span className="text-[27.8px]">1,500円〜</span>
                </p>

                <img
                  className="relative w-[41.63px] h-[77.71px] mb-[-3.72px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
                />
              </div>

              <div className="justify-center flex-[0_0_auto] flex w-[235.26px] items-center relative">
                <img
                  className="mb-[-3.72px] ml-[-4.00px] relative w-[41.63px] h-[77.71px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
                />

                <p className="mt-[-2.15px] ml-[-9.41px] text-[37.5px] leading-[36.1px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                  <span className="tracking-[0]">夜</span>
                  <span className="tracking-[-3.24px]">勤・</span>
                  <span className="tracking-[0]">
                    日勤
                    <br />
                  </span>
                  <span className="text-[27.8px] tracking-[0]">えらべる</span>
                </p>

                <img
                  className="mb-[-3.72px] mr-[-4.00px] ml-[-9.41px] relative w-[41.63px] h-[77.71px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
                />
              </div>

              <div className="justify-center gap-[18.82px] flex-[0_0_auto] flex w-[235.26px] items-center relative">
                <img
                  className="mb-[-2.73px] ml-[-3.40px] relative w-[41.63px] h-[77.71px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
                />

                <p className="mt-[-2.17px] text-[37.5px] leading-[39.2px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                  <span className="tracking-[0]">送</span>
                  <span className="tracking-[-3.24px]">
                    迎<br />
                  </span>
                  <span className="tracking-[0]">駅チカ</span>
                </p>

                <img
                  className="mb-[-2.73px] mr-[-3.40px] relative w-[41.63px] h-[77.71px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
                />
              </div>
            </div>
          </div>

          <img
            className="absolute w-[544px] h-[533px] top-[307px] left-24"
            alt="Fv"
            src="/img/fv.png"
          />
        </div>
      </div>

      {/* タブレット版: 元のソースコード - 画面幅に応じて自動スケール */}
      <div className="bg-[#ffffff] overflow-hidden w-full relative pt-20 hidden md:block lg:hidden flex justify-center" style={{ minHeight: `${1378 * tabletScale}px` }}>
        <div 
          style={{
            width: '1048px',
            height: '1378px',
            transform: `scale(${tabletScale})`,
            transformOrigin: 'top left',
            position: 'relative'
          }}
        >
          <img
            className="absolute -top-1 left-px w-[1048px] h-[1378px]"
            alt="Frame"
            src="/img/frame-1000004000.svg"
          />

          <div className="flex flex-col w-[1035px] items-start gap-[86.67px] absolute top-[194px] left-[46px]">
            <div className="flex flex-col items-start gap-[7.98px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[1028.1px] h-[273.69px]">
                <div className="absolute top-px left-[367px] w-[588px] h-[179px]">
                  <div className="-top-px left-5 text-[136.9px] leading-[178.7px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    優良求人
                  </div>

                  <p className="absolute top-0 left-3.5 [-webkit-text-stroke:1.14px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-transparent text-[136.9px] tracking-[0] leading-[178.7px] whitespace-nowrap border-white">
                    <span className="text-[#e18194]">優</span>
                    <span className="text-[#e8d97c]">良</span>
                    <span className="text-[#89b929]">求</span>
                    <span className="text-[#11a5b1]">人</span>
                  </p>
                </div>

                <div className="absolute top-px left-[3px] w-[314px] h-[179px]">
                  <div className="-top-px left-5 text-[136.9px] leading-[178.7px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                    派遣
                  </div>

                  <div className="absolute top-0 left-3.5 [-webkit-text-stroke:1.14px_#ffffff] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[136.9px] tracking-[0] leading-[178.7px] whitespace-nowrap border-white">
                    派遣
                  </div>
                </div>

                <div className="top-[66px] left-[298px] text-[84.4px] leading-[110.2px] absolute [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                  の
                </div>

                <div className="absolute top-[165px] left-2.5 [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[84.4px] tracking-[0] leading-[110.2px] whitespace-nowrap">
                  あなたにジャストマッチ。
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-[11.4px] pl-[11.4px] pr-0 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.14px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[27.4px] tracking-[0] leading-[normal]">
                  物流・製造から夜勤まで、未経験でも安心して始められる案件多数。
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start justify-center gap-[38.42px] pl-[22.64px] pr-0 py-0 relative flex-[0_0_auto]">
              <div className="h-[117.55px] flex w-[383.31px] items-center relative">
                <img
                  className="mb-[-9.06px] ml-[-4.53px] relative w-[67.83px] h-[126.61px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-5.png"
                />

                <div className="relative w-fit ml-[-10.22px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[61.1px] tracking-[0] leading-[normal] whitespace-nowrap">
                  未経験OK
                </div>

                <img
                  className="mb-[-9.06px] mr-[-4.00px] ml-[-10.22px] relative w-[67.83px] h-[126.61px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-4.png"
                />
              </div>

              <div className="justify-center gap-[10.22px] flex-[0_0_auto] flex w-[383.31px] items-center relative">
                <img
                  className="relative w-[67.83px] h-[126.61px] mb-[-6.77px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
                />

                <p className="mt-[-3.50px] text-[61.3px] tracking-[0] leading-[58.8px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[61.3px] tracking-[0] leading-[58.8px]">
                    高時給
                    <br />
                  </span>
                  <span className="text-[45.3px]">1,500円〜</span>
                </p>

                <img
                  className="relative w-[67.83px] h-[126.61px] mb-[-6.77px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-4.png"
                />
              </div>

              <div className="justify-center flex-[0_0_auto] flex w-[383.31px] items-center relative">
                <img
                  className="mb-[-6.77px] ml-[-6.08px] relative w-[67.83px] h-[126.61px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-5.png"
                />

                <p className="mt-[-3.50px] ml-[-15.33px] text-[61.1px] leading-[58.8px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                  <span className="tracking-[0]">夜</span>
                  <span className="tracking-[-8.60px]">勤・</span>
                  <span className="tracking-[0]">
                    日勤
                    <br />
                  </span>
                  <span className="text-[45.3px] tracking-[0]">えらべる</span>
                </p>

                <img
                  className="mb-[-6.77px] mr-[-6.08px] ml-[-15.33px] relative w-[67.83px] h-[126.61px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
                />
              </div>

              <div className="justify-center gap-[30.66px] flex-[0_0_auto] flex w-[383.31px] items-center relative">
                <img
                  className="mb-[-4.80px] ml-[-5.43px] relative w-[67.83px] h-[126.61px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
                />

                <p className="mt-[-3.53px] text-[61.1px] leading-[63.9px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                  <span className="tracking-[0]">送</span>
                  <span className="tracking-[-8.60px]">
                    迎<br />
                  </span>
                  <span className="tracking-[0]">駅チカ</span>
                </p>

                <img
                  className="mb-[-4.80px] mr-[-5.43px] relative w-[67.83px] h-[126.61px] aspect-[0.5]"
                  alt="Pngtreevector"
                  src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
                />
              </div>
            </div>
          </div>

          <img
            className="absolute w-[886px] h-[868px] top-[500px] left-[156px]"
            alt="Fv"
            src="/img/fv.png"
          />
        </div>
      </div>

      {/* PC版: 元のコードを完全に維持 */}
      <div className="relative w-full min-h-screen hidden lg:block lg:absolute lg:top-0 lg:left-0 bg-white" style={{ height: '624px' }}>
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

        {/* テキストコンテンツ */}
        <div className="flex flex-col w-full max-w-[908px] items-start gap-[76px] absolute top-36 left-[116px]">
          <div className="flex flex-col items-start gap-[7px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[901.84px] h-[240.53px]">
              {/* 優良求人 */}
              <div className="absolute left-[322px] w-[515px] h-[157px] top-0">
                <div className="absolute -top-px left-[18px] text-[120px] leading-[156.7px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                  優良求人
                </div>

                <p className="absolute left-[13px] [text-shadow:3px_3px_0px_rgba(0,0,0,0.4)] [font-family:'Noto_Sans_JP',Helvetica] font-black text-[120px] tracking-[0] leading-[156.7px] whitespace-nowrap top-0">
                  <span className="text-[#e18194]">優</span>
                  <span className="text-[#e8d97c]">良</span>
                  <span className="text-[#89b929]">求</span>
                  <span className="text-[#11a5b1]">人</span>
                </p>
              </div>

              {/* 派遣 */}
              <div className="absolute top-0 left-[3px] w-[275px] h-[157px]">
                <div className="absolute -top-px left-[18px] text-[120px] leading-[156.7px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                  派遣
                </div>

                <div className="absolute left-[13px] [text-shadow:3px_3px_0px_rgba(0,0,0,0.4)] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[120px] tracking-[0] leading-[156.7px] whitespace-nowrap top-0">
                  派遣
                </div>
              </div>

              {/* の */}
              <div className="absolute top-[58px] left-[261px] [text-shadow:3px_3px_0px_rgba(0,0,0,0.4)] text-[74px] leading-[96.6px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text tracking-[0] whitespace-nowrap">
                の
              </div>

              {/* あなたにジャストマッチ。 */}
              <div className="absolute top-36 left-2 [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[74px] tracking-[0] leading-[96.6px] whitespace-nowrap">
                あなたにジャストマッチ。
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 pl-2.5 pr-0 py-0 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-2xl tracking-[0] leading-[normal]">
                物流・製造から夜勤まで、未経験でも安心して始められる案件多数。
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-[16.96px] pl-2.5 pr-0 py-0 relative flex-[0_0_auto]">
            <div className="h-[51.91px] flex w-[169.28px] items-center relative">
              <img
                className="mb-[-4.00px] ml-[-2.00px] relative w-[29.96px] h-[55.91px] aspect-[0.5]"
                alt="Pngtreevector"
                src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
              />

              <div className="relative w-fit ml-[-4.51px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[27px] tracking-[0] leading-[normal]">
                未経験OK
              </div>

              <img
                className="mb-[-4.00px] mr-[-3.38px] ml-[-4.51px] relative w-[29.96px] h-[55.91px] aspect-[0.5]"
                alt="Pngtreevector"
                src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
              />
            </div>

            <div className="justify-center gap-[4.51px] flex w-[169.28px] items-center relative">
              <img
                className="relative w-[29.96px] h-[55.91px] mb-[-2.87px] aspect-[0.5]"
                alt="Pngtreevector"
                src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
              />

              <p className="mt-[-1.55px] text-[27.1px] tracking-[0] leading-[26.0px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#222222] text-[27.1px] tracking-[0] leading-[26.0px]">
                  高時給
                  <br />
                </span>
                <span className="text-xl">1,500円〜</span>
              </p>

              <img
                className="relative w-[29.96px] h-[55.91px] mb-[-2.87px] aspect-[0.5]"
                alt="Pngtreevector"
                src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
              />
            </div>

            <div className="justify-center flex w-[169.28px] items-center relative">
              <img
                className="mb-[-2.87px] ml-[-2.82px] relative w-[29.96px] h-[55.91px] aspect-[0.5]"
                alt="Pngtreevector"
                src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
              />

              <p className="mt-[-1.55px] ml-[-6.77px] text-[22px] leading-[28px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                夜勤・日勤<br />えらべる
              </p>

              <img
                className="mb-[-2.87px] mr-[-2.82px] ml-[-6.77px] relative w-[29.96px] h-[55.91px] aspect-[0.5]"
                alt="Pngtreevector"
                src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
              />
            </div>

            <div className="justify-center gap-[13.54px] flex w-[169.28px] items-center relative">
              <img
                className="mb-[-1.89px] ml-[-2.31px] relative w-[29.96px] h-[55.91px] aspect-[0.5]"
                alt="Pngtreevector"
                src="/img/pngtree-vector-illustration-of-an-isolated-10596837-7.png"
              />

              <p className="mt-[-1.56px] text-[27px] leading-[28.2px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-center">
                <span className="tracking-[0]">送</span>
                <span className="tracking-[-1.68px]">
                  迎<br />
                </span>
                <span className="tracking-[0]">駅チカ</span>
              </p>

              <img
                className="mb-[-1.89px] mr-[-2.31px] relative w-[29.96px] h-[55.91px] aspect-[0.5]"
                alt="Pngtreevector"
                src="/img/pngtree-vector-illustration-of-an-isolated-10596837-8.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
