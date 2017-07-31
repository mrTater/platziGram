'use strict'
import fixture from '../fixtures/'
export default class Db {
  connect () {
    return Promise.resolve(true)
  }
  disconect () {
    return Promise.resolve(false)
  }

  getImage (id) {
    return Promise.resolve(fixture.getImage())
  }

  saveImage (image) {
    return Promise.resolve(fixture.getImage())
  }
  likeImage (id) {
    let image = fixture.getImage()
    image.liked = true
    image.likes++
    return Promise.resolve(image)
  }
  getImages () {
    let images = fixture.getImages(4)
    return Promise.resolve(images)
  }
  getImageByTag (tag) {
    let images = fixture.getImages(4)
    return Promise.resolve(images)
  }
  saveUser (user) {
    let userNew = fixture.getUser()
    delete userNew.password
    delete userNew.email
    return Promise.resolve(userNew)
  }
  getUser (userName) {
    return Promise.resolve(fixture.getUser())
  }
  authenticate (username, pass) {
    return Promise.resolve(true)
  }
  getImageByUser (userId) {}
}
