import { z } from "zod";

type ParseFactoryParams<T> = z.Schema<T>;

export const createParseFunction = <T>(schema: ParseFactoryParams<T>) => {
  const parse = (json: any) => {
    return schema.parse(json);
  };
  return parse;
};
