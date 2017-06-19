# README

Here is my slightly scrappy task :). You can play it [here](https://matt-gadd.github.io/blocky)

The `npm scripts` remain in functionality, so `build`, `start`, `test`, `test:watch`, `pretty` to do appropriate actions, the only difference being the `test` commands use `jest` instead.

The game is mostly architected around blocks deciding game logic. A `blockType`, decides things such as getting its surrounding blocks, whether the surrounding blocks match, and finally whether those matching blocks equal a result. Because this logic is in the `blockType` this should mean it is easy to extend game logic, an example of this is included with the special `HorizontalLineBlock` which deviates from the standard colour matching, to simply remove a full line of blocks.

To keep the reducers from being impure the majority of the work is done in action creators (and one of the reasons why I used redux-thunk). You can rewind/fast-forward state using the undo/redo buttons on the game itself.

The react components themselves are extremely simple functional components, the `Column` component does use `react-transition-group` which allows animating new blocks into view.


## Given more time...

* I did not TDD this exercise and I ran out of time (not excusable :D), so I do not have a full set of tests and the tests I do have are mostly happy paths.
* Some of the overall naming/structure is a little scrappy due to time constraints
* Use a seeded rng for predictability. Helpful in testing scenarios and future game functionality (like sharing levels)
* Use an immutable library
* Implement a score board



