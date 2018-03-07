# VI - Basilica!

## Homework

Examine the modal window in [this article](https://css-tricks.com/receding-background-modal-boxes/). Here is the [finished sample](http://lab.hakim.se/avgrund/). Try to incorporate the following css properties into the modal we worked on in class.

```css
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
-webkit-filter: blur(5px) grayscale(50%);
```

## NPM - Demo

* [Wintersmith](https://github.com/jnordberg/wintersmith)
* [Pug](https://www.npmjs.com/package/pug), [Pug CLI](https://www.npmjs.com/package/pug-cli), [Pug article](https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33) (aka Jade)
* [Pug online demo](http://aramboyajyan.github.io/online-jade-template-editor/)
* [CoffeeScript](http://coffeescript.org)

## Node Package Manager

```sh
$ cd <PATH>
$ pwd // print working directory
$ ls // list the files
```

Review `npm init` and npm install:

```sh
$ npm init
$ npm install browser-sync --save-dev
```

`npm init` creates `package.json` and installs [Browser Sync](https://www.browsersync.io) into the `node_modules` folder.

Create the NPM script:

```js
"startSync": "browser-sync start --browser 'google chrome' --server 'app' --files 'app'"
```

And run the process:

```sh
$ npm run startSync
```

## JavaScript

Build the popover window:

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

Add it to the script:

```js
<script>
    var popoverWindow = document.querySelector('.betainfo')
    var betaButton = document.querySelector('.beta')
    var popoverCloseButton = document.querySelector('.closer')
    var shader = document.querySelector('.shader')
    betaButton.addEventListener('click', showPopover)
    popoverCloseButton.addEventListener('click', showPopover)
    shader.addEventListener('click', showPopover)

    function showPopover(){
        popoverWindow.classList.toggle('show')
        shader.classList.toggle('show')
        event.preventDefault()
    }
```

## SASS

[Syntactically Awesome Style Sheets](https://sass-lang.com) - SASS [adds features](http://sass-lang.com/guide) to css.

### Free Apps

(Note - on OSX you may need to right click and choose open rather than double click in order to run these.)

[Koala](http://koala-app.com)

[Scout app](http://scout-app.io/)

[node-sass](https://www.npmjs.com/package/node-sass) - not an app but the software both the above use. We want to use this via an npm script.

For Scout the setup includes creating and input folder for sass and an output folder for css.

### Node-sass

Create a `scss` directory at the top level of the project and save styles.css into it using the .scss suffix.

Install node-sass via NPM as a developmental dependency.

Add a script for processing:

```
  "scripts": {
    "startSync": "browser-sync start --browser 'google chrome' --server 'app' --files 'app'",
    "startSass": "node-sass  --watch scss/styles.scss --output app/css/"
  },
```

Node-sass CLI [documentation](https://github.com/sass/node-sass#command-line-interface)

Test it by running `$ npm run startSass` and adding to the scss file.

We need to run both scripts at the same time.

```
npm install concurrently --save-dev
```

```
"scripts": {
  "start": "browser-sync start --browser 'google chrome' --server 'app' --files 'app'",
  "startSass": "node-sass  --watch scss/styles.scss --output app/css/",
  "boom!": "concurrently \"npm run start\" \"npm run startSass\" "
},
```

#### SASS variables:

$basil-green: #88a308;
$breakpoint-med: 640px;

#### SASS nesting (do this one step at a time):

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

#### SASS comments:

`//` - JavaScript style. These comments do not get compiled into the css file. Traditional ones do.

#### SASS includes

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
