'use strict'

const store = require('../store')
const showSongsTemplate = require('../templates/song-listing.handlebars')

// authentication user interface
const removeMessageClass = () => {
  $('#log-user-message').removeClass('text-success text-danger')
  $('#load-resource-message').removeClass('text-success text-danger')
  $('#song-table').removeClass('text-success text-danger')
}
const onSignUpSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Congradulations! Sign Up Success')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignUpFailure = () => {
  $('#log-user-message').addClass('text-danger').text('Username or Password taken, try again.')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignInSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Sign In Success! Share some Tunes!')
  store.user = responseData.user
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.sign-up-container').hide()
  $('.sign-out-container').fadeIn(1500)
  $('.create-song-container').fadeIn(1500)
}
const onSignInFailure = () => {
  $('#log-user-message').addClass('text-danger').text('Unkown username or password')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignOutSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Sign Out Success')
  store.user = null
  $('.sign-up-container').show()
  $('.sign-out-container').hide()
  $('.create-song-container').hide()
  $('#song-table').hide()
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignOutFailure = (responseData) => {
  $('#log-user-message').addClass('text-danger').text('You failed to sign out')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onChangePasswordSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Hoorah! Password Changed!')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onChangePasswordFailure = (responseData) => {
  $('#log-user-message').addClass('text-danger').text('Failed to Change Password')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}

// resource user interface

const onCreateSongSuccess = (responseData) => {
  $('#load-resource-message').addClass('text-success').text('You Created a Song!')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('#song-table').hide()
}
const onCreateSongFailure = (responseData) => {
  $('#load-resource-message').addClass('text-danger').text('Create Song Failure')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onDeleteSongSuccess = (responseData) => {
  $('#load-resource-message').addClass('text-success').text('Song Deleted')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('#song-table').hide()
}
const onDeleteSongFailure = (responseData) => {
  $('#load-resource-message').addClass('text-danger').text('Song was not deleted')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onGetAllSongsSuccess = (responseData) => {
  const showSongsHtml = showSongsTemplate({ songs: responseData.songs })
  if (responseData.songs.length === 0) {
    $('#load-resource-message').addClass('text-danger').text('Playlist Empty')
    $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  } else {
    $('#log-user-message').addClass('text-success').text('All Songs Located!')
    $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
    $('#song-table').html(showSongsHtml).fadeIn(3000)
  }
}
const onUpdateRatingSuccess = (responseData) => {
  $('#load-resource-message').addClass('text-success').text('Song Rating Updated')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('#song-table').hide()
}
const onUpdateRatingFailure = (responseData) => {
  $('#load-resource-message').addClass('text-danger').text('Song was not updated')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onCreateSongSuccess,
  onCreateSongFailure,
  onDeleteSongSuccess,
  onDeleteSongFailure,
  onGetAllSongsSuccess,
  onUpdateRatingSuccess,
  onUpdateRatingFailure
}
