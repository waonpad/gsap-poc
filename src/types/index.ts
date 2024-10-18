export type NoLeadingSlash<T extends string> = T extends `/${infer U}` ? U : T;

export type PromiseType<T extends Promise<unknown>> = T extends Promise<infer P> ? P : never;
