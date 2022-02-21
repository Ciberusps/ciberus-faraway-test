// PlayCanvas life-cycle methods
export type OnCollisionStart = (result: pc.ContactResult) => void;
export type OnCollisionEnd = (result: pc.Entity) => void;
export type Update = (dt: number) => void;
