# VI - Basilica!

## Homework

Edit the css for the Basilica site so the header and navigation work on a small screen. Try to incorporate the following css properties into the modal window we worked on in class.

<!-- Examine the modal window in [this article](https://css-tricks.com/receding-background-modal-boxes/). Here is the [finished sample](http://lab.hakim.se/avgrund/). Try to incorporate the following css properties into the modal we worked on in class. -->

```css
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
-webkit-filter: blur(5px) grayscale(50%);
```

## Node Package Manager - Demo

NPM case study - A static site generator. [What is a static site generator?](https://davidwalsh.name/introduction-static-site-generators)

* [Wintersmith](https://github.com/jnordberg/wintersmith)
* [Markdown](https://en.wikipedia.org/wiki/Markdown)
* [Pug](https://www.npmjs.com/package/pug), [Pug CLI](https://www.npmjs.com/package/pug-cli), [Pug article](https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33) (aka Jade)
* [Pug online demo](http://aramboyajyan.github.io/online-jade-template-editor/)
* [CoffeeScript](http://coffeescript.org)

## The Command Line

* Note: Windows users might wish to check out [CMDER](http://cmder.net). Most of the commands below are different on Windows or have alternatives so let's use the Git Bash terminal (installed along with Git).

```sh
$ cd ~ // go to your home directory
$ cd <PATH> // copy and paste the folder you want to go to
$ cd Desk // tab completion
$ cd .. // go up one level
$ ls
$ ls -al  // flags expand the command
$ pwd
```

## Node Package Manager

[Node Package Manager](https://www.npmjs.com) is an essential part of the web design and development ecosystem.

`npm init` and npm install:

```sh
$ npm init
$ npm install browser-sync --save-dev
```

`npm init` creates `package.json` and `npm install browser-sync --save-dev` installs [Browser Sync](https://www.browsersync.io) into the `node_modules` folder.

Note:

* package.json
* dependencies
* node_modules folder
* discuss the need for `.gitignore`.

### Editing package.json

We will be again using [Browser Sync](https://www.browsersync.io) as our sample application.

* Browser Sync [Command Line (CLI) documentation](https://www.browsersync.io/docs/command-line)

Create the NPM script using the Browser Sync command line documentation:

```js
  "scripts": {
    "start": "browser-sync start --server 'app' --files 'app'"
  },
```

Or, on a windows PC:

```js
"start": "browser-sync start --server \"app\" --files \"app\""
```

And run the process:

```sh
$ npm run start
```

Quit the process with Control-c. Try adding a `--directory` option:

```js
  "scripts": {
    "startmac": "browser-sync start --directory --server 'app' --files 'app'",
    "startpc": "browser-sync start --directory --server \"app\" --files \"app\""
  },
```

And `--browser` options (note the PC browser):

```js
"startmac": "browser-sync start --browser 'google chrome' --server 'app' --files 'app'"
"startpc": "browser-sync start --browser \"chrome.exe\" --server \"app\" --files \"app\""
```

## CSS Grid

Review float vs flex for layout.

Flexbox operates in a [single dimension](https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf): x or y. CSS Grid operates in both.

Our use of Flexbox to style the content columns operates in a single (horizontal or x) dimension. We can use CSS Grid but only need to specify one dimension.

```css
.content{
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  /*grid-template-rows: 20% 20% 20% 20% 20%;*/
}
article {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: span 3;
}
aside {
    grid-row-start: 1;
    grid-column-start: 4;
    grid-column-end: span 2;
}
```

## JavaScript

Build the popover window.

Create and style a div on the bottom of the page.

```html
<div class="betainfo">
    <h2>In Beta</h2>
    <p>Information about the beta program.<p>
</div>
```

```css
.betainfo {
    width: 50%;
    padding: 1rem;
    background: #fff;
    border: 2px solid #eabc5a;
    border-radius: 0.25rem;
    position: fixed;
    z-index: 2000;
    top: 50%;
    left: 50%;
    margin: -25% 0 0 -25%;
    /*display: none;*/
}
```

Add `display: none` to the beta window and the show class to the css

```css
.show {
    display: block;
}
```

Code the .beta button to show the window.

```js
var popoverWindow = document.querySelector('.betainfo');
var betaButton = document.querySelector('.beta');
betaButton.addEventListener('click', showPopover);

function showPopover() {
    popoverWindow.classList.toggle('show');
    event.preventDefault();
}
```

### Another Close Method

Add html to the betainfo:

```html
<div class="betainfo">
    <h2>In Beta</h2>
    <p>Information about the beta program.<p>
    <a class="closer" href="#0">X</a>
</div>
```

Style it:

```css
.closer {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 1.5rem;
    height: 1.5rem;
    background: #fff;
    border: 2px solid #eabc5a;
    border-radius: 50%;
    text-align: center;
    line-height: 1.5rem;
}
```

Add functionality to the JavaScript:

```js
var popoverWindow = document.querySelector('.betainfo');
var betaButton = document.querySelector('.beta');
var popoverCloseButton = document.querySelector('.closer');
betaButton.addEventListener('click', showPopover);
popoverCloseButton.addEventListener('click', showPopover);

function showPopover() {
    popoverWindow.classList.toggle('show');
    event.preventDefault();
}
```

Add a shader to block access to the page and make the window modal:

```html
<div class="shader"></div>
```

Add styling:

```css
.shader {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: none;
}
```

Change position absolute to position fixed and add a z-index.

Add it to the script:

```js
var popoverWindow = document.querySelector('.betainfo')
var betaButton = document.querySelector('.beta')
var popoverCloseButton = document.querySelector('.closer')
var shader = document.querySelector('.shader')  // NEW
betaButton.addEventListener('click', showPopover)
popoverCloseButton.addEventListener('click', showPopover)
shader.addEventListener('click', showPopover)  // NEW

function showPopover(){
    popoverWindow.classList.toggle('show')
    shader.classList.toggle('show')  // NEW
    event.preventDefault()
}
```

## SASS

[Syntactically Awesome Style Sheets](https://sass-lang.com) - SASS [adds features](http://sass-lang.com/guide) to css.

It also provides us with a simple example of _trans-piling_, or _pre-processing_ (forms of compiling).

### Alternative One - Apps

* [Koala](http://koala-app.com)
* [Scout app](http://scout-app.io/)

For Scout the setup includes creating and defining an input folder for sass and an output folder for css.

(Note - on OSX you may need to right click and choose open rather than double click in order to run these.)

### Alternative Two - Node-sass

You can also use NPM to install [node-sass](https://www.npmjs.com/package/node-sass) - not an app but the software both the above use. Use this via an npm script.

### Implementation Alternative One - App

Create a `scss` directory at the top level of the project (the `session6` folder) and save `styles.css` into it _using the .scss suffix_ as `styles.scss`.

Download and start Scout-App and select Add Project. Specify the `scss` folder as the input folder and the `css` folder in app as the output folder.

Test that the pre-processing is working by adding the following to the scss file:

```css
* { color red !important }
```

and then viewing the output.

### Implementation Alternative Two - node-sass

Install node-sass via NPM as a developmental dependency.

Add a script for processing:

```js
  "scripts": {
    ...
    "startSass": "node-sass  --watch scss/styles.scss --output app/css/"
  },
```

Node-sass CLI [documentation](https://github.com/sass/node-sass#command-line-interface)

Test it by running `$ npm run startSass` and adding to the scss file.

We need to run both scripts at the same time.

```sh
$ npm install concurrently --save-dev
```

```js
"scripts": {
  ...
  "startSass": "node-sass  --watch scss/styles.scss --output app/css/",
  "boom!": "concurrently \"npm run start\" \"npm run startSass\" "
},
```

#### SASS variables

```sass
$basil-green: #88a308;
$breakpoint-med: 640px;
```

#### SASS nesting 



```css
header {
    position: relative;
    height: 120px;
    background: $basil-green;
    border-radius: 8px 8px 0px 0px;
    h1 {
        background: url(img/basil.png) no-repeat;
        font-family: FuturaStdLight, sans-serif;
        font-weight: normal;
        color: #fff;
        font-size: 5rem;
        background-position: -20px -20px;
        @media (min-width: $breakpoint-med) {
            padding-left: 240px;
            padding-top: 90px;
            transform: translate(-100px, -80px);
            background-position: top left;
        }
    }
    a.beta {
        background: url('img/burst.svg') no-repeat;
        color: #fff;
        font-size: 1.5rem;
        position: absolute;
        top: -20px;
        right: 10px;
        width: 85px;
        height: 85px;
        line-height: 85px;
        text-align: center;
        text-transform: uppercase;
        transform: rotate(20deg);
        transition: all 1s ease;
        &:hover {
            transform: rotate(0deg) scale(1.2);
        }
    }
}
```

#### SASS Comments

`//` - JavaScript style. These comments do not get compiled into the css file. Traditional ones do.

#### SASS Partials and Imports

Allow you to create separate function or feature specific style sheets using [imports](https://sass-lang.com/guide#topic-4)and helps maintain a large code base.

`@import "imports/variables";`



## NOTES

Variables for breakpoints and colors.

Example:

```
$break-five: 81.25em;
// 1300px
$break-four: 71.25em;
// 1140
$break-three: 61.25em;
// 980
$break-two: 46.25em;
// 760
$break-one: 22.5em;
// 360

//ADDITIONAL CONVERSIONS
// 67.5rem    1080px
// 1.125rem   18px
// 1rem       16px
// 0.875rem   14px
// .75rem     12px
$radius: .25rem;

$fonts: 'Source Sans Pro', Helvetica, Clean, sans-serif;

$link: #007eb6;
$cyan: #00aeef;
$cyan10: #e2f4fd;
$blue100: #003366;
$blue50: #5997b1;
$webdarkcyan: #006991;
$specialblue: #007eb6;
$text: #444;
$caption: #808285;
$borders: #dcdcdc;
$borders-callout: #820064;
$lightgray: #F2F2F1;
$gray10: #ebeced;
$gray25: #d0d2d3;
$gray50: #abacad;
$gray75: #808285;
$gray100: #585858;
$fushia100: #820064;
$green100: #339548;
$red100: #cc3333;


$blk-100: rgba(0,0,0,1);
$blk-095: rgba(0,0,0,0.95);
$blk-090: rgba(0,0,0,0.90);
$blk-085: rgba(0,0,0,0.85);
$blk-080: rgba(0,0,0,0.80);
$blk-075: rgba(0,0,0,0.75);
$blk-070: rgba(0,0,0,0.70);
$blk-065: rgba(0,0,0,0.65);
$blk-060: rgba(0,0,0,0.60);
$blk-055: rgba(0,0,0,0.55);
$blk-050: rgba(0,0,0,0.50);
$blk-040: rgba(0,0,0,0.40);
$blk-010: rgba(0,0,0,0.10);

$gray-100: rgba(51,51,51,1);
$gray-095: rgba(51,51,51,0.95);
$gray-090: rgba(51,51,51,0.90);
$gray-085: rgba(51,51,51,0.85);
$gray-080: rgba(51,51,51,0.80);
$gray-075: rgba(51,51,51,0.75);
$gray-070: rgba(51,51,51,0.70);
$gray-065: rgba(51,51,51,0.65);
$gray-060: rgba(51,51,51,0.60);
$gray-055: rgba(51,51,51,0.55);
$gray-050: rgba(51,51,51,0.50);
$gray-040: rgba(51,51,51,0.40);
$gray-010: rgba(51,51,51,0.10);
```
