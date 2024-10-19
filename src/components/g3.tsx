"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const G3 = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          yoyo: true,
          repeat: -1,
        })
        .to(".box", { x: 300, duration: 1 });
    },
    { scope: container },
  );

  return (
    <>
      <div ref={container}>
        <div className="box h-20 w-20 bg-green-400">反復移動</div>
      </div>
    </>
  );
};
