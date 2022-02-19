# ciberus-faraway-test

## Setup

- `npm i`
- `npm list --depth=0 -g` check that `playcanvas-sync` installed globally
- copy `.pcconfig.example` to `.pcconfig` your home directory examples
  - windows - C:/Users/YOUR_USER_NAME
  - macos - /Users/YOUR_USER_NAME
- fill `.pcconfig` as described here https://github.com/playcanvas/playcanvas-sync#config-variables
- now you ready to go start `npm run dev`

## Improvements

- mb parcel is overkill, ts-node-dev enough
- mb decorators/classes/property-decorators also overkill and there is way to make typesafe code with prototypes
- mb scripts load order broken
- mb types should be from latest github release of playcanvas engine installed like this(dont works) `npm i https://github.com/playcanvas/engine/releases/latest -D`) for now its installed via `npm i https://github.com/playcanvas/engine/tree/v1.51.7 -D` strict to some version probably better than use `dev` branch... npm i dont work with playcanvas repo(
