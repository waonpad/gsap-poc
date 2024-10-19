"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export const G2 = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const element = container.current;

      gsap.to(
        // 動かす対象
        element,
        {
          x: 300,
          scrollTrigger: {
            // アニメーションの開始、終了の位置決定に使う要素
            trigger: element,
            // アニメーションの開始位置
            // 要素の上端が画面の上10%の位置に来たらアニメーション開始
            start: "top 20%",
            // trueにするとマーカーが表示される
            // markers: true,
            // スクロールの進行度に応じてアニメーションの進行度を変化させる
            // つまり、これがtrueの場合durationは意味をなさない
            // scrub: true,
            // こうすると遅延させられる
            // scrub: 1,
          },
          duration: 1,
        },
      );
    },
    { scope: container },
  );

  return (
    <>
      <div ref={container} className="h-20 w-20 bg-green-400">
        移動する要素
      </div>
      {/* <div className="h-screen" /> */}
    </>
  );
};
