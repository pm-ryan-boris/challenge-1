# Challenge 1

## Notes

+[ ] Run `yarn` or `yarn install` in the root directory to install dependencies.  Or you can use the corresponding procedure using npm if you prefer.

+[ ] A unit test has been included to check if you return what the expectated values are.  If you run `yarn test` in the root of the directory it will launch the testing suite and it will remain live and update as you update your work.

+[ ] Complete the challenge in the `challenge.js` file.

+[ ] I recommend doing a draft on a branch and moving your final working code base over to the master as your last action and to indicate completiton.  On your "development" branch or draft make sure you commit logically.  For example, after I wrote out my pseudocode, for something like this I would commit each time I had a functional action.  So, if one of my tasks lets say is to split a string into an array, I would commit that functionality with a message along the lines of "Splits incoming string argument into an array of individual characters." or whatever you deem logical and clearly descriptive.

## Challenge Statement

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

## Example Outputs

```js

deleteNth ([1,1,1,1],2) // return [1,1]

```

  ```js

deleteNth ([20,37,20,21],1) // return [20,37,21]

```
