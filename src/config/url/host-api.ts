import { clientEnv } from "@/config/env/client";
import type { NoLeadingSlash } from "@/types";

export const hostApi = <T extends string>(path: NoLeadingSlash<T>) => {
  return `${clientEnv.NEXT_PUBLIC_HOST_URL}/api/${path}` as const;
};
