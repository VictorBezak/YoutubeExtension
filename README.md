# Functions for the Removal of Youtube Videos From a "Watch Later" Playlist

## Basic JS

The Basic JS folder contains an index.html which can be launched in your browser to test basic DOM manipulation with javascript. Feel free to extend and adapt this as much as you'd like.

## WebConsole.js

>  
> These methods are designed to be ran from the web console, and only function as intended when the user is in their [extended Watch Later playlist view](images/watchLaterView.png) at:  https://www.youtube.com/playlist?list=WL  
>
> [Web Console](images/webConsole.png) Resources:  
> https://developers.google.com/web/tools/chrome-devtools/open  
> https://developers.google.com/web/tools/chrome-devtools/console
>  

WebConsole.js containes the funtions that I used to delete my "Watch Later" Youtube videos. These are the functions that will one day grow into a robust catch-all, interactive experience for users to selectively filter and delete their Youtube "Watch Later" playlists.

For now, the **goal** is simple: *Get these functions not to suck so bad*

### TODO

1. Redesign the `removeVideo` function so that it only executes the appropriate removal function, instead of executing both every time.

2. Use OOP to create a removal ***object*** which we can call methods from like so:

- `watchlater.removeVideo()`
- `watchlater.clearall()`
- `watchlater.filter()`
- etc.

3. Find a way to generalize our functions more so that they're not depending on class name attributes to traverse the DOM (if youtube updates their platform and changes any targeted classnames, our tool will break)
