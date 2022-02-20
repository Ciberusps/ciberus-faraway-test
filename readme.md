# ciberus-faraway-test

## Setup

- Install dependencies `npm i`
- Copy `.pcconfig` to your home directory e.g.
  - windows - `C:/Users/<username>`
  - macos - `/Users/<username>`
- Copy `pcconfig.example.json` and rename to `pcconfig.json`. This file is needed to configure playcanvas-sync to upload the file to correct PlayCanvas Editor project.
- In `pcconfig.json` fill `PLAYCANVAS_API_KEY`, `PLAYCANVAS_BRANCH_ID`, `PLAYCANVAS_PROJECT_ID` using https://github.com/playcanvas/playcanvas-sync#config-variables
- now you ready to go start `npm run dev`

## Improvements

- mb parcel is overkill, ts-node-dev enough
- mb decorators/classes/property-decorators also overkill and there is way to make typesafe code with prototypes
- mb scripts load order broken
- mb types should be from latest github release of playcanvas engine installed like this(dont works) `npm i https://github.com/playcanvas/engine/releases/latest -D`) for now its installed via `npm i https://github.com/playcanvas/engine/tree/v1.51.7 -D` strict to some version probably better than use `dev` branch... npm i dont work with playcanvas repo(

## npm scripts

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `npm run dev`   | Compiles tsc files and push to playcanvas.com project |
| `npm run build` | Performs `build` and `push` to playcanvas.com project |
