#Introduction
Gapp is a simple template that you can use to create a nice looking page that showcases your repository on github. It is much faster than starting from scratch and with github pages you dont have to worry about hosting.

Gapp was made to let anyone quickly make a page which describes what their script/app does. You can basically put your `README` file as the content by manually converting the markdown into html by using something like [showdown](http://showdown.im) or [pandoc](http://johnmacfarlane.net/pandoc/index.html). Note you will need to make a few changes to get the navigation to work.

The css for Gapp in written in [LESS](http://lesscss.org), the source is available under the css folder.

#Get Started
Just `git clone` [the repository](https://github.com/nhoss2/gapp) or [download it](http://github.com/nhoss2/gapp/zipball/master). The master branch has a sample index.html, css files and a javascript file.

#Layout
The page is made up of three sections - Header, navigation and content. Both the header and navigation are optional.

    <header>
    </header>
    <div id="nav_container">
    </div>
    <div id="content">
    </div>

The page layout is designed for readability. By default, all text wrapped in `<p>` tags are on the left half of the page and all code wrapped in `<pre>` tags are on the right side. If you want a paragraph to go for the entire length of the page add the class `<p class="whole_line">`.

#Code

There are two ways of displaying code:

**`<code>`**: This is for displaying code in line with the paragraph and `look like this`.

**`<pre>`**: This is to display code on the right side.

    This is what a pre looks like

If you want the `<pre>` to go for the entire width of the page, add the class `whole_line` to it: `<pre class="whole_line">`

Lastly, if you want syntax highlighting on your code, you need to add the class  `<pre class="prettyprint">`. This uses [google-code-prettify](http://code.google.com/p/google-code-prettify). 

I have used the [sunburst theme](http://code.google.com/p/google-code-prettify/source/browse/trunk/styles/sunburst.css) for prettify. The code that initializes prettify is inside `nav.js`. 

#Header
The header is where you have all the basic information about your repository. It is wrapped inside `<header>` tags. It is split into two sections: `<div id="header_left">` and `<div id="header_right">`.

    <header>
        <div id="header_left">
        ...
        </div>
        <div id="header_right">
        ...
        </div>
    </header>

Header left is where you have the name, sub heading and a little description of your repository.

    <div id="header_left">
        <h1>Repository Name Here</h1>
        <h2>Optional sub heading</h2>
        <p>A description of your repository</p>
    </div>

Header right is where you have a button to your repository and a download link. Each button is a simple `<a class="button">` tag.
    
    <div id="header_right">
        <a href="https://github.com/username/repo-name/zipball/master">Download</a>
        <a href="https://github.com/username/repo-name/">View on Github</a>
    </div>

#Navigation
The navigation bar combined with its javascript counterpart `nav.js` works as a detachable bar that auto updates the current position. It consists of two divs: `#nav_container` and `#nav`. Each link inside the nav bar is a simple `<a>` (ie there are no lists involved).

    <div id="nav_container">
        <div id="nav">
            <a href="#intallation">Installation</a>
            <a href="#nav2">Nav button</a>
            <a href="#nav3">Nav button</a>
            <a href="#nav4">Nav button</a>
        </div>
    </div>

    <div id="content">
        <h1><a id ="installation" href="#">Installation</a></h1>
    </div>

Note for the navigation (and its javascript) to work, each link inside the nav bar needs to be the id of an `<a>` tag inside a corresponding `h1`. You can link to anything else but the javascript will not auto update the current position for anything other than `h1`s. 
