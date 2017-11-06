# mal-api

[![Build Status](https://travis-ci.org/ChrisAlderson/mal-api.svg?branch=master)](https://travis-ci.org/ChrisAlderson/mal-api)
[![Coverage Status](https://coveralls.io/repos/github/ChrisAlderson/mal-api/badge.svg?branch=master)](https://coveralls.io/github/ChrisAlderson/mal-api?branch=master)
[![Dependency Status](https://david-dm.org/ChrisAlderson/mal-api.svg)](https://david-dm.org/ChrisAlderson/mal-api)
[![devDependency Status](https://david-dm.org/ChrisAlderson/mal-api/dev-status.svg)](https://david-dm.org/ChrisAlderson/mal-api#info=devDependencies)

A NodeJS wrapper for [MyAnimeList API](https://myanimelist.net/). For more
more information you can check the API documentation of
[MyAnimeList](https://myanimelist.net/modules.php?go=api).

## Usage

#### Setup
```
npm install --save mal-api
```

#### Initialize
```js
const MalApi = require('mal-api')

// Create a new instance of the module.
const mal = new MalApi({
  username, // The username of the user.
  password, // The password of the user.
})
```

#### Example usage

##### Account

**verifyCredentials:**
```js
mal.account.verifyCredentials()
  .then(res => console.log(res))
  .catch(err => done(err))
```

##### Anime

**searchAnime:**
```js
mal.manga.searchManga('naruto')
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**[add,update,delete]Anime:**
```js
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
```

##### Manga

**searchManga:**
```js
mal.manga.searchManga('naruto')
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**[add,update,delete]Manga:**
```js
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
```

## Output

**verifyCredentials:**

```js
{
  id: ['5928304'],
  username: ['ChrisAlderson']
}
```

**searchAnime:**
```js
[{
  "id": "20",
  "title": "Naruto",
  "english": "Naruto",
  "synonyms": "NARUTO",
  "episodes": "220",
  "score": "7.81",
  "type": "TV",
  "status": "Finished Airing",
  "start_date": "2002-10-03",
  "end_date": "2007-02-08",
  "synopsis": "Moments prior to Naruto Uzumaki&#039s birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi&#039s rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.<br />\r\n<br />\r\nNow, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.<br />\r\n<br />\r\n[Written by MAL Rewrite]",
  "image": "https://myanimelist.cdn-dena.com/images/anime/13/17405.jpg"
}]
```

**searchManga:**
```js
[{
  "id": "11",
  "title": "Naruto",
  "english": "Naruto",
  "synonyms": "",
  "chapters": "700",
  "volumes": "72",
  "score": "8.13",
  "type": "Manga",
  "status": "Finished",
  "start_date": "1999-09-21",
  "end_date": "2014-11-10",
  "synopsis": "Before Naruto&#039s birth, a great demon fox had attacked the Hidden Leaf Village. A man known as the 4th Hokage sealed the demon inside the newly born Naruto, causing him to unknowingly grow up detested by his fellow villagers. Despite his lack of talent in many areas of ninjutsu, Naruto strives for only one goal: to gain the title of Hokage, the strongest ninja in his village. Desiring the respect he never received, Naruto works toward his dream with fellow friends Sasuke and Sakura and mentor Kakashi as they go through many trials and battles that come with being a ninja.",
  "image": "https://myanimelist.cdn-dena.com/images/manga/3/117681.jpg"
}]
```

**add[Manga,Anime]:**
```
Created
```

**update[Manga,Anime]:**
```
Updated
```

**delete[Manga,Anime]:**
```
Deleted
```

## Testing

You can run tests with the following npm command:
```
 $ MAL_USER=[Your username] MAL_PASS=[Your password] npm test
```

# License

MIT License

Copyright (c) 2017 - mal-api - Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
