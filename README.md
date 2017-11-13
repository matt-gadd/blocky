# README

You can play it [here](https://matt-gadd.github.io/blocky)

The `npm scripts` remain in functionality, so `build`, `start`, `test`, `test:watch`, `pretty` to do appropriate actions, the only difference being the `test` commands use `jest` instead.

The game is mostly architected around blocks deciding game logic. A `blockType`, decides things such as getting its surrounding blocks, whether the surrounding blocks match, and finally whether those matching blocks equal a result. Because this logic is in the `blockType` this should mean it is easy to extend game logic, an example of this is included with the special `HorizontalLineBlock` which deviates from the standard colour matching, to simply remove a full line of blocks.

To keep the reducers from being impure the majority of the work is done in action creators (and one of the reasons why I used redux-thunk). You can rewind/fast-forward state using the undo/redo buttons on the game itself.

The react components themselves are extremely simple functional components, the `Column` component does use `react-transition-group` which allows animating new blocks into view.


