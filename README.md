# Phase 1 Code Challenge: Ramen Rater

## Learning Goals

- Access information from an API using a GET request and use it to update the
  DOM
- Listen for user events and update the DOM in response

## Introduction

In this challenge you'll be building an app for rating ramen.
You will be using a local API and building out
the frontend for our app.

## Demo

Use this gif as an example of how the app should work.

![demo](https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-mock-cc-ramen-rater/demo-gif.gif)

## Setup

- Run `npm install` to install the dependencies.
- Run `json-server --watch db.json` to get the backend started
- Run `json-server --watch db.json` to install live-server globally
- Run `live-server` to start the frontend in browser
- Write your code in the `index.js` file
- As you are writing your code out and completing the deliverables ensure that it works on the DOM and passes the tests by running `npm test` in a new terminal in the same directory

## Endpoints

Your base URL for your API will be: `http://localhost:3000`

The endpoints you may need are:

- GET `/ramens`
- GET `/ramens/:id`

Feel free to add any additional classes or ids to any elements in the HTML file
as you see fit.

## Core Deliverables

As a user, I can:

- See all ramen images in the `div` with the id of `ramen-menu`. When the page
  loads, fire a function called `displayRamens` that requests the data from the server
  to get all the ramen objects. Then,
  display the image for each of the ramen using an `img` tag inside the
  `#ramen-menu` div.
- Click on an image from the `#ramen-menu` div and fire a callback called `handleClick`
  to see all the info about that
  ramen displayed inside the `#ramen-detail` div (where it says
  `insert comment here` and `insert rating here`).
- Attach a submit even listener to the `new-ramen` form using a function called `addSubmitListener`.
  After the submission, create a new ramen and add it to the`#ramen-menu` div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no
  longer on the page.

** Attention here **: Your program should have a main() function that invokes `displayRamens` and `addSubmitListener` after the DOM has fully loaded and start the program logic.

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user, I can:

- See the details for the first ramen as soon as the page loads (without
  clicking on an image)
- Update the rating and comment for a ramen by submitting a form. Changes should
  be reflected on the frontend. No need to persist. You can add this HTML to the
  `index.html` file to create the edit form:

```html
<form id="edit-ramen">
  <h4>Update the Featured Ramen</h4>
  <label for="rating">Rating: </label>
  <input type="number" name="rating" id="new-rating" />
  <label for="new-comment">Comment: </label>
  <textarea name="new-comment" id="new-comment"></textarea>
  <input type="submit" value="Update" />
</form>
```

- Delete a ramen (you can add a "delete" button if you'd like, or use an
  existing element to handle the delete action). The ramen should be removed
  from the `ramen-menu` div, and should not be displayed in the `ramen-detail`
  div. No need to persist.

## Extra Advanced Deliverables

You'll need these endpoints for the advanced deliverables:

- POST `/ramens`
- DELETE `/ramens/:id`
- PATCH `/ramens/:id`

As a user, I can:

- persist my updates to a ramen's rating and comment. (PATCH request)
- persist new ramens that I create (POST request)
- persist any ramen deletions (DELETE request)
