// https://stackoverflow.com/questions/53966509/typescript-type-safe-omit-function

type Keys<T> = (keyof T)[];

interface OmitFunction {
  <T, K extends Keys<T>>(
    obj: T,
    keys: K,
  ): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2];
  };
}

export const omit: OmitFunction = (obj, keys) => {
  const ret = {} as {
    [K in keyof typeof obj]: (typeof obj)[K];
  };
  let key: keyof typeof obj;
  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};
