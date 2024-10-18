import { clientEnv } from "@/config/env/client";
import { describe, expect, it } from "vitest";
import { host } from "./host";

describe("host", () => {
  it("ホスティングしているサーバーのURLを返す", () => {
    const path = "path";
    const result = host(path);
    expect(result).toBe(`${clientEnv.NEXT_PUBLIC_HOST_URL}/${path}`);
  });
});
