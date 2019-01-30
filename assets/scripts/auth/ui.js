'use strict'

const store = require('../store')

// authentication user interface
const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#log-user-message').text('Great Success! You have signed up!')
  console.log('Sign Up Success')
}
const onSignUpFailure = () => {
  $('#log-user-message').text('Username or Password taken, try again.')
  console.log('Sign Up Failure')
}
const onSignInSuccess = (responseData) => {
  console.log(responseData)
  $('#log-user-message').text('You are in! Prepare for battle')
  store.user = responseData.user
  console.log('Store is:', store)
}
const onSignInFailure = () => {
  $('#log-user-message').text('Unkown username or password')
}
const onSignOutSuccess = (responseData) => {
  $('#log-user-message').text('No More Tic Tac for You!')
  console.log('Store is:', store)
  store.user = null
}
const onSignOutFailure = (responseData) => {
  $('#log-user-message').text('You failed to sign out')
}
const onChangePasswordSuccess = (responseData) => {
  $('#log-user-message').text('Hoorah! Password Changed!')
}
const onChangePasswordFailure = (responseData) => {
  $('#log-user-message').text('Failed to Change Password')
}

// resource user interface
// const onCreateSongSuccess = (responseData) => {
//   console.log(responseData)
//   $('#log-user-message').text('You Created a Song!')
// }
// const onCreateSongFailure = (responseData) => {
//   console.log(responseData)
//   $('#log-user-message').text('Create Song Failure')
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
  // onCreateSongSuccess,
  // onCreateSongFailure
}
