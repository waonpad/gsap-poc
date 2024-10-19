"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

// TODO: よくわからないのでまた今度やる
export const Scr = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            // コンテナの上端が画面の上端に来たらアニメーション開始
            start: "top top",
            // コンテナの下端が画面の上端に来たらアニメーション終了
            end: "bottom top",
            markers: true,
            scrub: true,
            pin: true,
          },
        })
        .to(".box", {
          x: 300,
        })
        .to(".box", {
          y: 300,
        });
    },
    { scope: container },
  );

  return (
    <>
      <div
        className="bg-green-200"
        style={{
          height: 3000,
        }}
        ref={container}
      >
        <div className="box h-20 w-20 bg-green-400">スクロールで移動</div>
      </div>
    </>
  );
};
