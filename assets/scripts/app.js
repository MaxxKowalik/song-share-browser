'use strict'
const authEvents = require('./auth/events.js')
const api = require('./auth/api.js')
const ui = require('./auth/ui.js')

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
  $('.all-genres').on('submit', authEvents.onGetAllGenres)
  // $('.delete-genre').on('click', authEvents.onDeleteGenre)

  // show genres table
  $('body').on('click', '#genre-table', authEvents.genresTable)

  // delete genre button
  $('body').on('click', '.delete-genre', () => {
    $('.delete-genre').on('click', (event) => {
      const genreId = $(event.target).data('genre')
      const songId = $(event.target).data('song')
      api.deleteGenre(genreId, songId)
        .then(ui.onDeleteGenreSuccess)
        .catch(ui.DeleteGenreFailure)
    })
  })

  // get all genres
  $('body').on('click', '.all-genres', () => {
    $('.all-genres').on('click', (event) => {
      const songId = $(event.target).data('song')
      authEvents.onGetAllGenres(songId)
    })
  })
})
