export * from 'https://deno.land/x/denodb/mod.ts';

export interface Values {
  [key: string]: number | string | boolean | Date | null;
}
