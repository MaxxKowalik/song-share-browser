'use strict'
const config = require('../config')
const store = require('../store')

// authentication api
const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}
const changePassword = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// resource api
const createSong = (formData) => {
  console.log('data: ', formData)
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const getAllSongs = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'POST',
    data: formData
  })
}
const deleteSong = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/song/:id',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const updateRating = () => {
  return $.ajax({
    url: config.apiUrl + '/song/:id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createSong,
  getAllSongs,
  deleteSong,
  updateRating
}
