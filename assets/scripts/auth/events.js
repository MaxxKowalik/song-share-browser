const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

// authentication events
const onSignUp = event => {
  event.preventDefault()
  const signUpForm = event.target
  const formData = getFormFields(signUpForm)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('form').trigger('reset')
}
const onSignIn = event => {
  event.preventDefault()
  const signInForm = event.target
  const formData = getFormFields(signInForm)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  $('form').trigger('reset')
}
const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)

  $('form').trigger('reset')
}
const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)

  $('form').trigger('reset')
}

// song resource events
const onCreateSong = event => {
  event.preventDefault()
  const createSongForm = event.target
  const formData = getFormFields(createSongForm)

  api.createSong(formData)
    .then(ui.onCreateSongSuccess)
    .catch(ui.onCreateSongFailure)

  $('form').trigger('reset')
}
const onGetAllSongs = event => {
  event.preventDefault()
  const getAllSongsForm = event.target
  const formData = getFormFields(getAllSongsForm)
  api.getAllSongs(formData)
    .then(ui.onGetAllSongsSuccess)
    .catch(ui.onGetAllSongsFailure)

  $('form').trigger('reset')
}
const onDeleteSong = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.deleteSong(formData)
    .then(ui.onDeleteSongSuccess)
    .catch(ui.onDeleteSongFailure)

  $('form').trigger('reset')
}
const onUpdateRating = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.updateRating(formData)
    .then(ui.onUpdateRatingSuccess)
    .catch(ui.onUpdateRatingFailure)

  $('form').trigger('reset')
}

// genre resource events
const onCreateGenre = event => {
  event.preventDefault()
  const createGenreForm = event.target
  const formData = getFormFields(createGenreForm)

  api.createGenre(formData)
    .then(ui.onCreateGenreSuccess)
    .catch(ui.onCreateGenreFailure)

  $('form').trigger('reset')
}
const onGetAllGenres = songId => {
  api.getAllGenres(songId)
    .then(ui.onGetAllGenresSuccess)

  $('form').trigger('reset')
}
const onDeleteGenre = event => {
  event.preventDefault()
  $('form').trigger('reset')
}

// this will show the genre table
const genresTable = event => {
  $('.create-genre-container').show()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateSong,
  onGetAllSongs,
  onDeleteSong,
  onUpdateRating,
  onCreateGenre,
  onGetAllGenres,
  onDeleteGenre,
  genresTable
}
