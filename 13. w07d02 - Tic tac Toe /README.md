![](/ga_cog.png)

# Tic Tac Toe

<hr>
Title: Tic Tac Toe<br>
Type: Lab and homework <br>
Duration: 6+ hrs<br>
Creator: Thom Page<br>
Topics: Dynamic elements with loops. Using the same click handler to target the clicked element. Game logic. <br>
<hr>

# OBJECTIVE

Make a game of Tic Tac Toe. Google "tic tac toe" to see a working version of TTT.

![ttt](https://i.imgur.com/LL8gc53.png)

**DO NOT COPY ANY CODE FROM THESE RESULTS**

## Minimum Viable Product (MVP)

You must submit the following:

* A 3x3 grid with clickable squares.
* When a square is clicked, it will display either "X" or "O".
* "X" and "O" should alternate with each click.
* If a square already contains an "X" or an "O", it should not change with subsequent clicks

## Recommended

* Win conditions (more below)

## Stretch goals

* Win conditions that will work for a board of custom size (3x3, 4x4, 5x5 ...), where the user can choose the size.

* A computer opponent that will play against you, either randomly or with a strategy in mind.

## Setup

* In the `homework` directory for today

* Make a directory `tic_tac_toe`

* Inside `tic_tac_toe`, Make your three usual front-end files: `app.js`, `index.html` and a `style.css`, add the jQuery CDN, link them up, confirm that they're connected.

# MVP - SUGGESTED STEPS

## Make the game board

You will want a container div for the board, and some divs (squares) for your players to (eventually) click on. Generate the squares in a for loop.

Make it so the divs align in a 3x3 grid. Non flexbox hint: if you generate 9 squares and the squares are set to `display: inline-block`, and they are the right size, they will adjust position according to the size of a containing div. Or, `flexbox`.

**Make sure your 3x3 grid is generated, visible, and ready to go before moving on!**

## Make it so the squares are clickable

We want to make it so that when any of these squares is clicked, that we can have something happen to the individual square that was clicked. Try setting a single event listener within the loop that creates the squares. Start with just a console log within the handler.

## Make each individual square show an X when clicked

Suggestion: use a named function as the event handler. Define your handler function _above_ the for loop so that it will be defined before the loop runs.

To target the square-that-was-clicked, think about using `currentTarget`.

**Remember to giv your game some style**

Some strategies for styling so far:

* Change the size of the 'X' font in your square class to something bigger
* Center the 'X' font within the div. `text-align: center`
* Vertically align your 'X' within the square:
	* Set `line-height` to the height of the square div (250px)
	* Set `vertical-align: middle`
* Or, flexbox.

If you add text to the square, it might vertically rearrange your squares. To keep them in line, investigate setting `overflow: hidden` on your square class.


## Make the squares show an X or an O

First bit of game logic: By toggling a global variable to either `true` or `false`, make it so that when a user clicks on a square, it will alternate between displaying 'X' and 'O'

## Check if already clicked

Make it so that a square will not change its 'X' or 'O' if it has already been clicked.

# STRETCH GOALS - SUGGESTED STEPS

## Win conditions

Game logic! Make it so that

* If there are three Xs in a row, a message appears saying that X has won the game.

* If there are three Os in a row, a message appears saying that O has won the game.

* In the case of a tie, a message also appears.

If someone has won, or there is a tie, no more clicks can occur on the board.


## Any size grid with win conditions

Make it so the user can select the height or width of the board (eg. 3 will mean a 3x3 board, 4 will mean a 4x4 board).

With a board of any (squared) size, make it so the win conditions will still work. Examples: For a 16x16 board, 16 Xs in a row wins. For a 20x20 board, 20 Os in a row wins, etc.


## Computer opponent

Make it so that the computer will play against you.

* The AI should not be able to play on an already-played square

* Your AI can just play on random squares, or you could give it some strategy (what is a good strategy in Tic Tac Toe?)


# HUNGRY FOR MORE

* Reset the board after each game
* Keep track of the score for each player after each reset.
