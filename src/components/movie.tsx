"use client";
import Logo from "@/app/logo.svg";
import Text_01 from "@/assets/text-svg/01.svg";
import Pattern01 from "@/assets/text-svg/pattern-01.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const vw = 1024;
const vh = 576;
const topBarHeight = 72;
const bottomBarHeight = 72;

export const Movie = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.set(".scene-chnager-y", {
        y: "-100%",
      });

      tl.current = gsap
        .timeline({
          onComplete: () => {
            // シーンチェンジで画面を覆い直す
            // gsap.set(".scene-chnager-y", {
            //   y: "-100%",
            // });
            // テキストを元の位置に戻す
            // gsap.set(".rb-pattern-number", {
            //   x: 0,
            // });
          },
        })
        // 縦のシーンチェンジ
        // .to(".scene-chnager-y", {
        //   y: "-100%",
        //   duration: 0.75,
        //   ease: "expo.in",
        // })
        .to(".scene-chnager-y", {
          y: "0%",
          duration: 0.75,
          ease: "expo.out",
        })
        .to(
          ".rb-pattern-number",
          {
            x: 140,
            duration: 0.75,
            ease: "expo.out",
          },
          // シーンチェンジと同時にアニメーションを開始
          "<",
        )
        .to(
          ".lt-square",
          {
            y: 404,
            duration: 0.75,
            ease: "expo.out",
          },
          // シーンチェンジと同時にアニメーションを開始
          "<",
        )
        .to(
          ".logo",
          {
            keyframes: [
              {
                opacity: 1,
              },
              {
                opacity: 0.2,
              },
              {
                opacity: 1,
              },
            ],
            duration: 0.2,
          },
          "<",
        )
        // TODO: 確認済み、後で使う
        // 横のシーンチェンジ
        // .to(".scene-chnager-x", {
        //   x: "-200%",
        //   duration: 1.5,
        //   ease: "expo.inOut",
        //   // 要素の位置を元に戻す
        //   onComplete: () => {
        //     gsap.set(".scene-chnager-x", {
        //       x: "0%",
        //     });
        //   },
        // })
        // // 横のシーンチェンジ2
        // .to(".scene-chnager-x-2", {
        //   x: "-200%",
        //   duration: 1.5,
        //   ease: "expo.inOut",
        //   // 要素の位置を元に戻す
        //   onComplete: () => {
        //     gsap.set(".scene-chnager-x-2", {
        //       x: "0%",
        //     });
        //   },
        // })
        .pause();
      // .timeScale(0.2);
    },
    { scope: container },
  );

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(15, 15, 15, 1)",
        }}
        className="flex h-dvh w-dvw flex-col items-center justify-center"
      >
        <button onClick={() => tl.current?.restart()} className="mb-4 text-white" type="button">
          再生
        </button>
        <div
          style={{
            backgroundColor: "rgba(61, 14, 16)",
          }}
        >
          <div
            ref={container}
            style={{
              width: vw,
              height: vh,
              // border: "1px solid white",
              position: "relative",
              overflow: "hidden",
              // 斜め45度の斜線をくりかえし描く
              background: `
            repeating-linear-gradient(
              -45deg,
              rgba(165, 127, 129, 0.25) 0px,
              rgba(165, 127, 129, 0.25) 4px,
              transparent 0px,
              transparent 16px
            )`,
            }}
          >
            <div
              className="rb-pattern-number"
              style={{
                position: "absolute",
                bottom: bottomBarHeight,
                left: "65%",
                height: 148,
              }}
            >
              <Text_01 height="100%" width="101%" fill="rgb(179, 50, 144)" />
            </div>
            <div
              className="lt-square"
              style={{
                position: "absolute",
                top: -616,
                // ↓ 移動
                // top: -212,
                left: -228,
                width: Math.hypot(402, 402),
                height: Math.hypot(402, 402),
                border: "4px solid rgb(179, 50, 144)",
                transform: "rotate(45deg)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: Math.hypot(284, 284),
                  height: Math.hypot(284, 284),
                  border: "4px solid rgb(179, 50, 144)",
                }}
              />
            </div>
            <div
              className="top-bar"
              style={{
                width: "100%",
                height: topBarHeight,
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "black",
              }}
            />
            <div style={{ height: 26, display: "flex", position: "absolute", top: 116, left: 206 }}>
              <Pattern01 height="100%" width="100%" fill="white" />
            </div>
            <div
              className="botom-bar"
              style={{
                width: "100%",
                height: bottomBarHeight,
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: "black",
              }}
            />
            <div
              className="scene-chnager-y"
              style={{
                width: "100%",
                height: `calc(100% - ${topBarHeight + bottomBarHeight}px)`,
                backgroundColor: "black",
                position: "absolute",
                top: `calc(100% - ${bottomBarHeight}px)`,
                left: 0,
              }}
            />
            <div
              className="scene-chnager-x"
              style={{
                width: "200%",
                height: `calc(100% - ${topBarHeight + bottomBarHeight}px)`,
                backgroundColor: "black",
                position: "absolute",
                top: topBarHeight,
                left: "100%",
              }}
            />
            <div
              className="scene-chnager-x-2"
              style={{
                width: "200%",
                height: `calc(100% - ${topBarHeight + bottomBarHeight}px)`,
                backgroundColor: "black",
                position: "absolute",
                top: topBarHeight,
                left: "100%",
                clipPath: `polygon(0 0, 100% 0, calc(100% - ((${vh}px - ${topBarHeight + bottomBarHeight}px) / 2)) 100%, 0 100%)`,
              }}
            />
            <div
              className="logo"
              style={{
                position: "absolute",
                top: 60,
                left: 78,
                opacity: 0,
              }}
            >
              {/* TODO: 点滅アニメーション */}
              <div style={{ position: "relative", width: 80 }}>
                <Logo
                  style={{ position: "absolute", top: 12, left: 12, opacity: 0.3 }}
                  width={80}
                  height={80}
                  fill="black"
                />
                <Logo style={{ position: "absolute", top: 0, left: 0 }} width={80} height={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
