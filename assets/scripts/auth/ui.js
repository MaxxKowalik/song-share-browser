'use strict'

const store = require('../store')
const showSongsTemplate = require('../templates/song-listing.handlebars')

// authentication user interface
const removeMessageClass = () => {
  $('#log-user-message').removeClass('text-success text-danger')
  $('#load-resource-message').removeClass('text-success text-danger')
}
const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#log-user-message').addClass('text-success').text('Congradulations! Sign Up Success')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignUpFailure = () => {
  $('#log-user-message').addClass('text-danger').text('Username or Password taken, try again.')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignInSuccess = (responseData) => {
  console.log(responseData)
  $('#log-user-message').addClass('text-success').text('Sign In Success! Share some Tunes!')
  store.user = responseData.user
  console.log('Store is:', store)
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.sign-up-container').hide()
  $('.sign-out-container').fadeIn(1500)
  $('.create-song-container').fadeIn(1500)
  // $('#load-resource-message').show()
}
const onSignInFailure = () => {
  $('#log-user-message').addClass('text-danger').text('Unkown username or password')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignOutSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Sign Out Success')
  console.log('Store is:', store)
  store.user = null
  $('.sign-up-container').show()
  $('.sign-out-container').hide()
  $('.create-song-container').hide()
  $('#load-resource-message').hide()
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  // $('#log-user-message').show()
  // $('#log-user-message').hide(5000)
  // $('form').trigger('reset')
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
  console.log(responseData)
  $('#load-resource-message').addClass('text-success').text('You Created a Song!')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onCreateSongFailure = (responseData) => {
  console.log(responseData)
  $('#load-resource-message').addClass('text-danger').text('Create Song Failure')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onDeleteSongSuccess = (responseData) => {
  $('#load-resource-message').addClass('text-success').text('Song Deleted')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  console.log('Store is:', store)
}
const onDeleteSongFailure = (responseData) => {
  $('#load-resource-message').addClass('text-danger').text('Song was not deleted')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onGetAllSongsSuccess = (responseData) => {
  const showSongsHtml = showSongsTemplate({ songs: responseData.songs })
  $('#load-resource-message').html(showSongsHtml)
  $('#load-resource-message').show()
  console.log(responseData)
}
const onGetAllSongsFailure = (responseData) => {
  $('#load-resource-message').addClass('text-danger').text('Could not locate songs')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onUpdateRatingSuccess = (responseData) => {
  $('#load-resource-message').addClass('text-success').text('Song Rating Updated')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  console.log(responseData)
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
  onGetAllSongsFailure,
  onUpdateRatingSuccess,
  onUpdateRatingFailure
}
