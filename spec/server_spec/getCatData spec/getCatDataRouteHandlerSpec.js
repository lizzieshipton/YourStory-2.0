'use strict';

const request = require('request');
const base_url = 'http://localhost:3000';
// const base_url = 'http://yourstory-app.herokuapp.com';

const db = require('../../../db/schema');
const Sequelize = require('sequelize');
const seed = require('../../../db/seed');
const drop = require('../../../db/drop');

describe('getCatData routehandler', function () {

  let originalTimeout;

  beforeEach(function (done) {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    seed(db);
    done()
  });

  afterEach(function (done) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    drop(db);
    done();
  });

  describe('GET /', function () {
    it('returns status 200', function (done) {
      request.get(base_url, function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe('GET /api/catData', function () {
    it('returns status 200', function (done) {
      request.get(base_url + '/api/catData', function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it('returns an array', function (done) {
      request.get(base_url + '/api/catData', function (error, response, body) {
        expect(JSON.parse(body)).toEqual(jasmine.any(Array));
        expect(JSON.parse(body).length).toBeGreaterThan(0);
        done();
      });
    });
  });
});
