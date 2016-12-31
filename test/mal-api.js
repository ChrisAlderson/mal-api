'use strict';

const { assert } = require('chai');

const MalAPI = require('../mal-api');

describe('MyAnimeList', () => {

  let mal, animeQuery, animeId, animeData, mangaQuery, mangaId, mangaData, responses;
  before(() => {
    mal = new MalAPI(
      process.env.MAL_USER,
      process.env.MAL_PASS,
      false
    );

    animeQuery = 'naruto';
    animeId = 21;
    animeData = {
      score: 10
    };

    mangaQuery = 'naruto';
    mangaId = 1535;
    mangaData = {
      score: 10
    };

    responses = {
      CREATED: 'Created',
      UPDATED: 'Updated',
      DELETED: 'Deleted'
    };
  });

  it('verifyCredentials', done => {
    mal.account.verifyCredentials().then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('searchAnime', done => {
    mal.anime.searchAnime(animeQuery).then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

  it('addAnime', done => {
    mal.anime.addAnime(animeId, animeData).then(res => {
      assert.isString(res);
      assert(res === responses.CREATED);
      done();
    }).catch(err => done(err));
  });

  it('updateAnime', done => {
    mal.anime.updateAnime(animeId, animeData).then(res => {
      assert.isString(res);
      assert(res === responses.UPDATED);
      done();
    }).catch(err => done(err));
  });

  it('deleteAnime', done => {
    mal.anime.deleteAnime(animeId).then(res => {
      assert.isString(res);
      assert(res === responses.DELETED);
      done();
    }).catch(err => done(err));
  });

  it('searchManga', done => {
    mal.manga.searchManga(mangaQuery).then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

  it('addManga', done => {
    mal.manga.addManga(mangaId, mangaData).then(res => {
      assert.isString(res);
      assert(res === responses.CREATED);
      done();
    }).catch(err => done(err));
  });

  it('updateManga', done => {
    mal.manga.updateManga(mangaId, mangaData).then(res => {
      assert.isString(res);
      assert(res === responses.UPDATED);
      done();
    }).catch(err => done(err));
  });

  it('deleteManga', done => {
    mal.manga.deleteManga(mangaId).then(res => {
      assert.isString(res);
      assert(res === responses.DELETED);
      done();
    }).catch(err => done(err));
  });

});
