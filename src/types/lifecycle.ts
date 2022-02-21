import { TTags } from "./common";

// PlayCanvas life-cycle methods
type OnCollisionStartResult = {
  other: {
    tags: {
      has: (tag: TTags) => boolean;
    };
  };
};

export type OnCollisionStart = (result: OnCollisionStartResult) => void;
export type Update = (dt: number) => void;
