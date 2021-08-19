# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./mobile.png)
![](./mobile-hover.png)
![](./desktop.png)
![](./desktop-active.png)

### Links

- Solution URL: [GitHub](https://github.com/Reykjabik/intro-component-with-signup-form)
- Live Site URL: [GitHub Page](https://reykjabik.github.io/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned about the HTML form attribute `novalidate`, to stop the browser from sending its default messages when a field is empty or has an invalid input.

I started working with Figma, and learning to take more accurate measure of distances, to try to make my code as similar as possible to the original.

This was also my first experience with some pseudoselectors like `:not`, `:valid`, `:invalid`, `:placeholder`.

I discovered that `margin-inline` and `margin-block` exist! And the same with padding. The first one sets the margin of the sides, whereas the latter the top and bottom ones. 

Also, I think this is the first time I applied `flex-basis` correctly! Yay!
 
### Continued development

I definitely need to practice more on forms. This one I managed to work out because I spent hours reading and looking for help. I would like to do the next one on my own, adding perhaps a bit more complexity or a few other new inputs.

I missed using more attractive animations for the buttons, but I have to admit that I barely know how they work. I've seen a few cool examples on Codepen (see below), but I am just not at that stage yet.

React! Perhaps it is time to get my feet wet? I kind of feel that I have some fear of React that I don't have with other technologies. 

### Useful resources

- [Florin-Pop](https://www.youtube.com/watch?v=rsd4FNGTRBw) - This half an hour video ended with my several hours inferno of creating the form validation in CSS and JS. I had made a mess of classes, pseudo classes and functions, and this video put it all in order for me. Really well explained.
- [Slider Revolution](https://www.sliderrevolution.com/resources/css-button-hover-effects/) - Although I didn't get to implement any of this for my buttons, I really liked some of the ideas and would consider start with some of the more basic ones for future projects.

## Author

- Website - [Reykjabik](https://github.com/Reykjabik/intro-component-with-signup-form)
- Frontend Mentor - [@reykjabik](https://www.frontendmentor.io/profile/Reykjabik)
- Twitter - [@strangerin_](https://twitter.com/strangerin_)