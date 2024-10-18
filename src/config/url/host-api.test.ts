import { clientEnv } from "@/config/env/client";
import { describe, expect, it } from "vitest";
import { hostApi } from "./host-api";

describe("hostApi", () => {
  it("ホスティングしているサーバーのAPIのURLを返す", () => {
    const path = "path";
    const result = hostApi(path);
    expect(result).toBe(`${clientEnv.NEXT_PUBLIC_HOST_URL}/api/${path}`);
  });
});
