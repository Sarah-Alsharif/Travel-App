### Travel App

## The goal of the project :
build out a travel app that, at a minimum, obtains a desired trip location & date from the user,
and displays weather and an image of the location using information obtained from external APIs.

## Functionalities :
* Using Webpack.
* Create async function to fetch data ( latitude, longitude) from Geonames API, using a city name.
* take data ( latitude, longitude)and Create async function to fetch wether data from Weatherbit API.
* Create async function to fetch image of city from Pixabay API , using a city name.
* Update the data in browser.
* using jest to test the functions.

## Webpack loader :
* babel loader.
* style-loader.
* css-loader.
* sass-loader.
* html-loder.
* file-loader.

## Webpack plugins : 

## Challenges :
* Add end date and display length of trip.
* Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
* Allow the user to add a todo list and/or packing list for their trip.
