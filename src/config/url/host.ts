import { clientEnv } from "@/config/env/client";
import type { NoLeadingSlash } from "@/types";

export const host = <T extends string>(path: NoLeadingSlash<T>) => {
  return `${clientEnv.NEXT_PUBLIC_HOST_URL}/${path}` as const;
};
