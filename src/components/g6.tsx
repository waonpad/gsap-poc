"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import TextPlugin from "gsap/TextPlugin";
import { useRef } from "react";

export const G6 = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // gsap.registerPlugin(TextPlugin);

      gsap.fromTo(
        ".char",
        {
          autoAlpha: 0, // アニメーション前は非表示(透過率0)
        },
        {
          autoAlpha: 1, // アニメーション後は出現(透過率0)
          repeat: -1, // リピート無限
          repeatDelay: 1.2, // 1.2秒遅れでリピート
          stagger: 0.1, // 0.2秒遅れて順番に再生
        },
      );

      // gsap.to(container.current, {
      //   text: "テキストが1文字ずつ表示されるアニメーション",
      //   duration: 1,
      //   stagger: 0.2,
      // });
    },
    { scope: container },
  );

  return (
    <>
      <div ref={container}>
        {"テキストが1文字ずつ表示されるアニメーション".split("").map((char, index) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="char"
          >
            {char}
          </span>
        ))}
      </div>
    </>
  );
};
