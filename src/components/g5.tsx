"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef } from "react";

export const G5 = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(MotionPathPlugin);

      gsap
        .timeline()
        .set(".box", {
          x: 100,
          y: 0,
        })
        .to(".box", {
          motionPath: {
            path: [
              // 円のpath
              { x: 100, y: 0 },
              { x: 200, y: 100 },
              { x: 100, y: 200 },
              { x: 0, y: 100 },
              { x: 100, y: 0 },
            ],
            curviness: 2,
            alignOrigin: [0.5, 0.5],
          },
          duration: 1,
          ease: "linear",
        })
        .repeat(-1);
    },
    { scope: container },
  );

  return (
    <>
      <div
        ref={container}
        style={{
          height: 300,
        }}
      >
        <div className="box h-20 w-20 bg-green-400">パスに沿って移動</div>
      </div>
    </>
  );
};
