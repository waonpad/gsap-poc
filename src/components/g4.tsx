"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef } from "react";

export const G4 = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(MotionPathPlugin);

      gsap
        .timeline()
        .to(".box", {
          motionPath: {
            path: "#circle",
            // align: "#circle",
            alignOrigin: [0.5, 0.5],
            // autoRotate: true,
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
        <div
          style={{
            position: "absolute",
          }}
          className="box h-20 w-20 bg-green-400"
        >
          svgのパスに沿って移動
        </div>
        {/* 円のpath */}
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          style={{
            display: "none",
          }}
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <path
            id="circle"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            stroke="black"
            fill="transparent"
          />
        </svg>
      </div>
    </>
  );
};
