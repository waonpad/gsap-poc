"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const G = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap;
    },
    { scope: container },
  );

  return (
    <>
      <div ref={container} className="box h-20 w-20 bg-green-400">
        テキスト
      </div>
    </>
  );
};
