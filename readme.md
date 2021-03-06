# ciberus-faraway-test

Test task commits - https://github.com/Ciberusps/ciberus-faraway-test/compare/34475dd22317a6af85e7c2eb54769c6b960bd336...9662e39cf557f6406e39fdf5e4beb53e0075b0cd

Project - https://playcanvas.com/project/883292/overview/ciberus_test_task
branch - `feature/test-task`
DefaultGym(scene) for testing purposes

Build - https://playcanv.as/p/DysznB0H

## Setup

- Install dependencies `npm i`
- Copy `.pcconfig` to your home directory e.g.
  - windows - `C:/Users/<username>`
  - macos - `/Users/<username>`
- Copy `pcconfig.example.json` and rename to `pcconfig.json`. This file is needed to configure playcanvas-sync to upload the file to correct PlayCanvas Editor project.
- In `pcconfig.json` fill `PLAYCANVAS_API_KEY`, `PLAYCANVAS_BRANCH_ID`, `PLAYCANVAS_PROJECT_ID` using https://github.com/playcanvas/playcanvas-sync#config-variables
- now you ready to go start `npm run dev`

## npm scripts

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `npm run dev`   | Compiles tsc files and push to playcanvas.com project |
| `npm run build` | Performs `build` and `push` to playcanvas.com project |

## Improvements

- mb parcel is overkill, ts-node-dev enough
- mb decorators/classes/property-decorators also overkill and there is way to make typesafe code with prototypes
- mb scripts load order broken
- typescript classes cant inherit methods types from parent and also methods cant be arrow functions because they lost "this" may be somehow methods can be binded in createScriptDecorator but i didnt found how
- "debug subsystem" like ue4, map with flags that turn on/off debugCategories, should be invoked from dev tools console like `debugSubsystem("%system_name%", true)`
- probably refactor project code structure in ue4-like style

  ```src
    ├── characters
    │   ├── enemy
    │   ├── player
    ├── components
    │   ├── movementComponents
    │   │   ├── playerMovement
    │   │   ├── lookAtMainCamera
    │   ├── weapon
    │   │   ├── shooting(better split on weapon barrel)
    ├── ui
    │   ├── enemyHpBarView
  ```

- mb types should be from latest github release of playcanvas engine installed like this(dont works) `npm i https://github.com/playcanvas/engine/releases/latest -D`) for now its installed via `npm i https://github.com/playcanvas/engine/tree/v1.51.7 -D` strict to some version probably better than use `dev` branch... npm i dont work with playcanvas repo(
