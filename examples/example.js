'use strict'

const MalAPI = require('../mal-api')

const mal = new MalAPI(
  process.env.MAL_USER,
  process.env.MAL_PASS
)

mal.account.verifyCredentials()
  .then(res => console.log(res))
  .catch(err => console.error(err))

mal.anime.searchAnime('naruto')
  .then(res => console.log(res))
  .catch(err => console.error(err))

mal.anime.addAnime(1535, {
  score: 10
}).then(res => {
  console.log(res)
  return mal.anime.updateAnime(1535, {
    score: 10
  })
}).then(res => {
  console.log(res)
  return mal.anime.deleteAnime(1535)
}).then(res => console.log(res))
  .catch(err => console.error(err))

mal.manga.searchManga('naruto')
  .then(res => console.log(res))
  .catch(err => console.error(err))

mal.manga.addManga(1535, {
  score: 10
}).then(res => {
  console.log(res)
  return mal.manga.updateManga(1535, {
    score: 10
  })
}).then(res => {
  console.log(res)
  return mal.manga.deleteManga(1535)
}).then(res => console.log(res))
  .catch(err => console.error(err))
