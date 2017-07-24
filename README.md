This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
and inspired by the functionality of the web-based minesweeper at [minesweeperonline.com](http://minesweeperonline.com/).

Please note: I kept commenting relatively sparse where I felt file naming, function naming, and variable naming
is self-explanatory.

# A few TODOs
- add responsive grid framework (started with MDL but removed due to issues with React, opted for simple static CSS
  rather than adding in Bootstrap, Susy, etc)
- clean-up mapAndUpdate and revealAdjacent in reducers/board.js -> the code here is not ideal but I was trying to
  use idiomatic Redux and not mutate state which eventually led to the code mentioned here
- add tests!
- fix weird rendering issue when rendering after difficulty selection
- add back in leaderboard functionality (stripped out initial roughed in code to finish)
- add ability to specify a custom board size (BoardGenerator.js is equipped to do this, just need UI components and
  connector code)


#### SVG Icons from the Noun Project
- [The Noun Project](https://thenounproject.com/)
- smiley smile by Hea Poh Lin from the Noun Project
- Smiley Blur by Hea Poh Lin from the Noun Project
- Smiley Laugh by Hea Poh Lin from the Noun Project
- naval mine by Oksana Latysheva from the Noun Project
- https://material.io/icons/#ic_flag