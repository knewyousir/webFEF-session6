# FOUNDATIONS session 6

## Homework



## Reading

* [SASS for Web Designers](https://abookapart.com/products/sass-for-web-designers) - finish reading


## Node Package Manager Review

```
$ cd <PATH> // session6
$ pwd // print working directory - where am I?
$ ls // list the files
```

Review `npm init` and npm install:

```
$ npm init
$ npm install browser-sync --save
```

`npm init` creates `package.json` and installs [Browser Sync](https://www.browsersync.io)  into the `node_modules` folder.

Since we already have a `package.json` we need only run:

```
$ npm install
```

Remove one of the two scripts (it is no longer necessary):

```
  "scripts": {
    "start": "browser-sync start --browser \"google chrome\" --server 'app' --files 'app'"
  },
```

```
$ npm run start
```

## Homework: JavaScript Review

Examine the behavior in the browser. 

Here's the script:

```
<script>
    var popoverWindow = document.querySelector('.betainfo')
    var betaButton = document.querySelector('.beta')
    var popoverCloseButton = document.querySelector('.closer')
    var shader = document.querySelector('.shader')
    betaButton.addEventListener('click', showPopover)
    popoverCloseButton.addEventListener('click', showPopover)
    shader.addEventListener('click', showPopover)

    function showPopover(){
        console.log(this)
        popoverWindow.classList.toggle('show')
        shader.classList.toggle('show')
        event.preventDefault()
    }
</script>
```


## SASS

[Syntactically Awesome Style Sheets](https://sass-lang.com) - takes sass files and converts (compiles) them into css. 

SASS [adds features](http://sass-lang.com/guide) to css.



### Free Apps

(Note - on OSX you may need to right click and choose open rather than double click in order to run these.)

[Koala](http://koala-app.com)

[Scout app](http://scout-app.io/)

[node-sass](https://www.npmjs.com/package/node-sass) - not an app but the software both the above use. We want to use this via an npm script but for now we'll use Scout.

For Scout the setup includes creating and input folder for sass and an output folder for css.



### Paid Options

[Codekit](https://codekitapp.com/) - Mac 

[Prepros](https://prepros.io/) - Windows


###Imports

Save `styles.css` as a SASS file: `structure.scss` into a newly created `imports` folder in `session6`.

Create `styles.scss` in the `sass` folder:

```
@import 'imports/font-face';
@import 'imports/structure';
```

Compare css imports with `font-face.css`:

```css
@import url(imports/font-face.css);
```

and the SASS equivalent with `_font-face.scss`:

```css
@import 'imports/font-face';
```

The first makes the css available to the browser but keeps them in separate files. 

The second takes the contents of the files and brings - or compiles - it into one css file.

Scout allows us to add a reset:

```
@import "normalize";
@import 'imports/font-face';
@import 'imports/structure';
@import 'imports/popover';
```

Let's move the popover content into imports as `_popover.scss` and import it using `styles.scss`:

```
@import "normalize";
@import 'imports/font-face';
@import 'imports/structure';
@import 'imports/popover';
```

Continue breaking out _structure.scss into separate modules.


## Review Basilica

![Image of Basilica](FINAL.png)

Review the document.

Responsive Images:

```css
img {
    width: 100%;
    height: auto;
}
```

Note the use of max-width on the body selector. We applied it to a div in the past.

Note the use of margin on the body element. We applied it to a div in the past.


### Review ::Pseudo-elements vs :Pseudo-classes

```
::first-letter      :hover
::first-line        :visited
::before            :link
::after             :active
::selection         :target
                    :focus
```

```
::selection { 
    background:var(--basil-green); 
    color:#fff; 
}
```

## Review Flex columns

Applies only to widescreen view.

```css
@media only screen and (min-width: 600px) {
    .content {
        display: flex;
    }
    article {
        flex: 1 0 60%;
    }
    aside {
        background: #F5FAEF;
        box-shadow: -4px 0px 4px #ddd;
    }
    
}
```

See [flex property](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - we are using a shortcut here which includes `flex-grow, flex-shrink, and flex-basis`. Default is `Default is 0 1 auto`. We are using:

```
  article {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 60%;
  }
```

Note also: the transition property on the anchors. This is a shortcut for:

Note the use of svg for the background image. Examine the svg in Sublime text.

Note: Header branding responsive design

Small screen:

```css
header h1 {
    background: url(img/basil.png) no-repeat;
    font-family: FuturaStdLight, sans-serif;
    font-weight: normal;
    color: #fff;
    font-size: 5rem;
    background-position: -20px -20px;
}
```

Large screen:

```css
@media only screen and (min-width: 600px) {
    header h1 {
        padding-left: 240px;
        padding-top: 90px; 
        transform: translate(-100px, -80px); 
        background-position: top left;
    }
}
```

### Navigation Flexbox

Basic [usage](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

```css
nav {
    background: #e4e1d1;
    border-top: 0.5rem solid #ebbd4e;
    padding: 0.5rem;
    display: flex;
    align-items: center;
}

nav ul {
    display: flex;
}

nav li {
    list-style: none;
    margin-right: 0.5rem;
}

nav p {
    margin-right: auto;
}
```

### Button and Gradients

```css
nav a {
    text-align: center;
    font-size: 1.5rem;
    padding: 8px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
}
```

```css
.nav-storeit a {
 background: linear-gradient(to bottom, #fcde41 1%, #dfa910 100%);
}

.nav-storeit a:hover {
 background: linear-gradient(to bottom, #dfa910 0%, #fcde41 100%);
}

.nav-pickit a {
  background: linear-gradient(to bottom, #abc841 0%, #6b861e 100%);
}

.nav-pickit a:hover {
  background: linear-gradient(to bottom, #6b861e 1%, #abc841 100%);
}

.nav-cookit a {
  background: linear-gradient(to bottom, #6f89c7 0%, #344e8b 100%);
}

.nav-cookit a:hover {
  background: linear-gradient(to bottom, #344e8b 1%, #6f89c7 100%);
}
```


## Responsive 

```
@media (min-width: 360px){
    nav p {
        display: none;
    }
}
```




## NOTES

```
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <defs>
        <style>.cls-1{fill:#f38f40;}</style>
        <filter id="f1" x="0" y="0">
            <feOffset result = "offOut" in = "SourceAlpha"  dx="1" dy="1" />
            <feGaussianBlur result = "blurOut" in = "offOut" stdDeviation="1" />
            <feBlend in = "SourceGraphic" in2 = "blurOut" mode = "normal"/>
        </filter>
    </defs>
    <title>Artboard 1-toc</title>
    <polygon class="cls-1" points="32.05 19.85 33.89 18 32.05 16.15 33.35 13.89 31.09 12.58 31.64 10.05 29 9.38 29 7 26.62 7 25.95 4.36 23.42 4.97 22.11 2.68 19.85 3.97 18 2.11 16.15 3.96 13.89 2.65 12.58 4.91 10.05 4.36 9.38 7 7 7 7 9.38 4.36 10.05 4.97 12.58 2.68 13.89 3.97 16.15 2.11 18 3.96 19.85 2.65 22.11 4.91 23.42 4.36 25.95 7 26.62 7 29 9.38 29 10.05 31.64 12.58 31.03 13.89 33.32 16.15 32.03 18 33.89 19.85 32.04 22.11 33.35 23.42 31.09 25.95 31.64 26.62 29 29 29 29 26.62 31.64 25.95 31.03 23.42 33.32 22.11 32.05 19.85" filter="url(#f1)"/></svg>
```
























