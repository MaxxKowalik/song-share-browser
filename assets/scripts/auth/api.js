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

// song resource api
const createSong = (formData) => {
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
    url: config.apiUrl + '/songs/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteSong = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/songs/' + formData.song.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const updateRating = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/songs/' + formData.song.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// song resource api
const createGenre = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/genres',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const getAllGenres = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/genres/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteGenre = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/genres/' + formData.genre.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
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
  updateRating,
  createGenre,
  getAllGenres,
  deleteGenre
}
