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
  // resource application
  $('#create-song').on('submit', authEvents.onCreateSong)
  $('#delete-song').on('submit', authEvents.onDeleteSong)
  $('#all-songs').on('click', authEvents.onGetAllSongs)
  $('#update-song').on('click', authEvents.onGetAllSongs)
  // $('#all-songs').on('submit', authEvents.onGetAllSongs)
  // $('#delete-song').on('click', authEvents.onDeleteSong)
  // $('#update-song').on('submit', authEvents.onUpdateRating)
})
