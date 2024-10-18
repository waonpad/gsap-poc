"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import type { MouseEvent } from "react";

export const G1 = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(".box", { x: 300, duration: 1 })
        // 停止させておく
        .pause();
    },
    { scope: container },
  );

  const handleBoxClick = contextSafe((_e: MouseEvent<HTMLButtonElement>) => {
    if (tl.current?.paused()) {
      // 停止中の場合は再生
      tl.current?.play();
      return;
    }

    if (tl.current?.reversed()) {
      // 逆再生中の場合は元の方向に再生
      tl.current?.play();
      return;
    }

    // 再生中の場合は逆再生
    tl.current?.reverse();
  });

  return (
    <>
      <div ref={container}>
        <button className="box h-20 w-20 bg-green-400" onClick={handleBoxClick} type="button">
          クリックすると移動
        </button>
      </div>
    </>
  );
};
