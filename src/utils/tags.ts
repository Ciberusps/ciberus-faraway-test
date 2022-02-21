export const entityTags = {
  ground: "ground",
  damageable: "damageable",
} as const;

export type TEntityTags = typeof entityTags;
