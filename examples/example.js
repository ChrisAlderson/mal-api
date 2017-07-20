'use strict'

// Import the necessary modules.
const MalAPI = require('../mal-api')

// Create a new instance of the module.
const mal = new MalAPI(
  process.env.MAL_USER,
  process.env.MAL_PASS
)

// Verify the credentials of a user and then start the CRUD operations for
// animes.
mal.account.verifyCredentials().then(res => {
  console.log(res)
  return mal.anime.searchAnime('naruto')
}).then(res => {
  console.log(res)
  return mal.anime.addAnime(21, {
    score: 10
  })
}).then(res => {
  console.log(res)
  return mal.anime.updateAnime(21, {
    score: 10
  })
}).then(res => {
  console.log(res)
  return mal.anime.deleteAnime(21)
}).then(res => console.log(res))
  .catch(err => console.error(err))

// The same for mangas.
// mal.account.verifyCredentials().then(res => {
//   console.log(res)
//   return mal.manga.searchManga('naruto')
// }).then(res => {
//   console.log(res)
//   return mal.manga.addManga(1535, {
//     score: 10
//   })
// }).then(res => {
//   console.log(res)
//   return mal.manga.updateManga(1535, {
//     score: 10
//   })
// }).then(res => {
//   console.log(res)
//   return mal.manga.deleteManga(1535)
// }).then(res => console.log(res))
//   .catch(err => console.error(err))
