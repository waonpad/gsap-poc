"use client";

import { G } from "@/components/g";
import { G1 } from "@/components/g1";
import { G2 } from "@/components/g2";

export const ClientPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col divide-y-2 px-2">
        {[G, G1, G2].map((Component, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index} className="py-2">
            <div className="mb-1">{Component.name}</div>
            <Component />
          </div>
        ))}
      </div>
    </>
  );
};
