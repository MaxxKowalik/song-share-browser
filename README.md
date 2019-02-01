[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
[![Link to back end repositiory](https://git.heroku.com/mysterious-savannah-18675.git)]
[![Link to front end repository](https://github.com/MaxxKowalik/song-share-browser)]


# LooneyToons Full Stack song log

LooneyToons allows a user to create an account, and log a list of their favorite songs.
After the user signs up and signs in, they can proceed to create a list of their favorite
songs, including the song name, artist, album, and they can give a rating to each song.
They can also update the rating of a song, and delete the song if it is no longer something
they want to keep track of.

[Check out LooneyToons here!](https://maxxkowalik.github.io/song-share-browser/)

## Technologies used

- Hypertext Markup Language (HTML)
- Cascading Style Sheets (CSS)
- JavaScript
- Ajax language
- jQuery
- Bootstrap
- Git
- cURL
- Handlebars

## Development Process and Strategy

The primary focus of this project was being able to create a backend API that would connect to a front end program and would work together smoothely. With the exception of correcting various issues, this was the strategy used to approach this program:
- Test various features using `cURL` scripts
- Use `Ruby on Rails` to create a resource that could connect to and be altered by a user
- Use forms, buttons, and sections in `index.html` to create locations for certain features
- Use `jQuery` to handle the events of specific targets.
- Send API calls to reflect user events and resource events that I created on the backend
- Structure and organize events for each feature
- Display events, text, and animation for the user to interact with on the front end

## The future of LooneyToons

- LooneyToons only allows users to create a list of songs to keep track of. Future verions of LooneyToons will allow the user to upload a link to the song itself.
- LooneyToons only allows the logged in user to look at the songs they've created. Future versions will allow the users the option to keep their list private, or share it with other users.
- Some of the fade styles in the user messages over lap if multiple buttons are pressed too quickly, however this does not effect the functionality of the program.

## Wireframes and user stories
1. [ ] [Wireframes located here.](https://imgur.com/DRMG69Z)
2. [ ] User Stories:
- As a user, I would like to view all songs.
- As a user, I would like to create a song with a name, artist, and album.
- As a user, I would like to edit a song, artist and album (perhaps add a rating?)
- As a user, I would like to delete a song.
