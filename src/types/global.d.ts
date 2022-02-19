import { pc } from "playcanvas";

declare global {
  const pc: typeof pc;

  namespace TRigidBody {
    type TOnCollisionStart = (result: TOnCollisionStartResult) => void;

    type TOnCollisionStartResult = {
      other: {
        tags: {
          has: (tag: string) => boolean;
        };
      };
    };
  }
}
