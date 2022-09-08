export type Plugin = (property: string, value: string) => [string, string][] | undefined;
