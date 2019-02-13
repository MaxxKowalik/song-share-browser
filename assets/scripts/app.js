'use strict'
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // authentication application
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // song resource application
  $('#create-song').on('submit', authEvents.onCreateSong)
  $('#delete-song').on('submit', authEvents.onDeleteSong)
  $('#all-songs').on('click', authEvents.onGetAllSongs)
  $('#update-song').on('submit', authEvents.onUpdateRating)
  // genre resource application
  $('#create-genre').on('submit', authEvents.onCreateGenre)
  $('#delete-genre').on('submit', authEvents.onDeleteGenre)
  $('#all-genres').on('click', authEvents.onGetAllGenres)

  // show genres table
  $('body').on('click', '#genre-table', authEvents.genresTable)
  // console.log('it worked!')
})
