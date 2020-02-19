[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Poke Express

![](https://i.imgur.com/rRKtN1B.jpg)

Make a Pokemon app that displays data inside server-side rendered views.

#### Learning Objectives

- Practicing index and show routes with express

#### Prerequisites

- JavaScript
- Express
- Node
- EJS

---

## The User Stories

- When a user goes to the `/pokemon` route they will see an `index` of pokemon: the names of each pokemon rendered to the page.
- When a user clicks on the name of the pokemon, they will be taken to that pokemon's `show` page, and will see the pokemon's name and image.

## Let's Start Catching 'em All!

### Set up the file structure

**In terminal:**
- inside your `homework` folder:
  - `mkdir pokemon_app`
  - `cd pokemon_app`
  - `mkdir views`
  - `touch views/index.ejs`
  - `touch views/show.ejs`
  - `mkdir models`
  - `touch models/pokemon.js`
  - `touch server.js`
  - `npm init`
    - follow `npm init` prompts
    - Does `npm init` create a file? If it does, where does it create the file? What is the name of the file?
  - `atom .`
- <details><summary>Approximate File Structure</summary>

  ![file structure image](https://i.imgur.com/GdpBW9j.png)

  **IMPORTANT! This image is a rough outline for you to double check which main folders should be nested or on the same level. If you just have one file, it could be argued that you don't need a folder for it. But as your apps grow, you'll need to get more organized and definitely use folders. Be consistent and adjust your routing, as needed.

</details>

<hr>
&#x1F534; Commit: <br>
"All my files are created"
<hr>

### Install NPM packages

**In terminal:**
- Make sure that you are on the same directory level as your `package.json` (why?)
- `npm i express ejs`
- check your `package.json`
- <details><summary>package.json screenshot</summary>

  ![package.json image](https://i.imgur.com/JiEa7M2.png)

</details>

<hr>
&#x1F534; Commit: <br>
"All my npm packages are added"
<hr>

### Set up your server

-**In your `server.js` file, set up your server**
   - require express
   - save `express()` to a variable
   - set a variable of `port` to `3000`
   - set your app to listen to the `port` and include a `console.log()`, so that you can tell when your server is running
   - include a get route `/` that will `res.send('Welcome to the Pokemon App!');` so that when you got to `localhost:3000`, you will see `Welcome to the Pokemon App!`
- **In terminal**
  - `nodemon` or `nodemon server.js` (if you set up your `package.json` to start `server.js` you don't need to put `server.js` after `nodemon`)
      - **GOTCHA!** : `nodemon` will only work if you run it from the same location as your `package.json`
- **In the browser**
   - go to `localhost:3000`
   - check that you have your `Welcome to the Pokemon App!` message displaying

<hr>
 &#x1F534; Commit: <br>
 "My server is set up and running"
<hr>

### Set up your _'database'_
- You have created a file called `pokemon.js`
- Inside of this file, put the following array of pokemon objects. This is your 'database' for tonight's homework, copy and paste it **as is**! You'll notice the image url's are missing something, this is _intentional_, do not edit anything directly inside the 'database'!

```
const pokemon = [
			{name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
			{name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
			{name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
			{name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
			{name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
			{name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
			{name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
		 ];
```
- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`
- Set this 'database' to a variable called `pokemon` in your `server.js` file
- Create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as JSON in the browser

<hr>
&#x1F534; Commit: <br>
"Connected my database, can see json in the browser"
<hr>

### Set up your index view

- Instead of displaying JSON at your `/pokemon` route, you should serve the `index.ejs` file you created that will display your pokemon
- You will have to set up your ejs file
  - Start with your HTML boilerplate code
  - Add an `<h1>` that describes this page, e.g. 'See All The Pokemon!'
  - Add a `<style>` tag so you can write some CSS directly in your html file. [More info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
  	- In the Hungry for More section you can work on properly linking a CSS file instead of using the style tag.  
  - Add a `background-color` and text `color` to the body, inside your `<style>` tag to be sure it is working as expected. Example:

```html
<style type="text/css">
  body {
    color: blanchedalmond;
    background-color: steelblue;
  }
</style>
```

- Change your `/pokemon` route to `res.render` your `index.ejs` file
- In your browser, go to `localhost:3000/pokemon` and be sure you see your `index.ejs` view with an `h1` tag

- **Stretch step, not required** : Choose a [google font](https://fonts.google.com/) and add it to your html and inside your `<style>` tag

<hr>
  &#x1F534; Commit: <br>
  "index.ejs view rendered at pokemon route"
<hr>

### Set up your index view to show your pokemon data
- Continue working on your `index.ejs` view so that you can see:
  - The name of each pokemon, as a `l`ist `i`tem, inside an `u`nordered `l`ist
  - This list should be dynamically rendered by ejs based on your data from your 'database'
  - You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data **programatically** to capitalize the first letter of their names

<hr>
    &#x1F534; Commit: <br>
    "I can view a list of all my pokemon in the browser"
<hr>

### Setting up your show route

- Inside your `server.js`, add a new get route `/pokemon/:id`
- Make it `res.send(req.params.id);`
- Go to `localhost:3000/pokemon/whatever`
 - `whatever` should show up in the browser

<hr>
   &#x1F534; Commit: <br>
   "Show view shows req.params.id "
<hr>

### Link your `index.ejs` to your `show.ejs`
 - Inside your `index.ejs`,
   - For each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemon/x`, where x is the array position of the `pokemon` in the data array. This should be set dynamically with ejs
   - When you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

<hr>
   &#x1F534; Commit: <br>
   "Added dynamic anchor tags to index.ejs"
<hr>

### Render your individual pokemon in the show view
- Copy/paste your code from your `index.ejs` into your `show.ejs` (surely, there must be a better way; are you wondering if there is something in the hungry for more section about this?)
- Change all your HTML code inside your `show.ejs` file's `<body>` so that
	- Your `h1` tag says "Gotta Catch 'Em All"
	- There is an `h2` tag that will display the name of the pokemon
	- There is an `img` tag that will display an image of the pokemon
	- There is an `a`nchor tag with the text of `back`, that will take you back to your `index.ejs` view
- Update the route in the `server.js` to `render` the show view with the pokemon data
- Oh no! The image is broken because in our database the image links don't have the `.jpg` ending, let's fix that **programatically**! _Without_ going back to the database and editing it there, add on `.jpg` to the end of the pokemon's image data

<hr>
  &#x1F534; Commit: <br>
  "Created show views of each pokemon"
<hr>

### Style your app
 - Update the appearance of your app with CSS
 - <details><summary> Example CSS </summary>

    Index page:
    ![index](https://i.imgur.com/5Q5maB7.png)

    Show page:
    ![show](https://i.imgur.com/USD5KN1.png)

 </details>

 <hr>
   &#x1F534; Commit: <br>
   "Added some styling"
 <hr>

## Hungry for More?

1. Look into EJS partials and try to implement them in your app! Create a partial for the head, and include it in both your views. We'll have a morning exercise covering partials later in the unit, but if you'd like to look into it now, a nice walkthrough can be found [here (starts about 1/4 of the way down)](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
1. Style your application with Bootstrap or any other CSS framework! Or really jazz up your app by adding some hand-rolled flourishes with css animations, jQuery and more!
1. Try out a challenge (or a few!)  on [Code Wars](https://www.codewars.com/) in order to keep honing your JavaScript skills!
1. Learn about express static in order to learn how to link a css file to your app (we'll be covering it tomorrow, but if you're interested in looking into it now: [read those docs!](https://expressjs.com/en/starter/static-files.html)) Go ahead and dive right in!

## Deliverables

An express app that meets all the user stories outlined in the beginning of this markdown.

## Technical Requirements
1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines

- Submit your homework via github issues before the next class starts.

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
