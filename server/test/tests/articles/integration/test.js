"use strict";

const database = require('../../../common/database');
const fswrapper = require('../../../../dist/services/filesystem/index');
const stop = require('../../../common/stop');
const Author = models.Author;

const CURR_DIR = __dirname;
const INSERT_DATA = 'insert.json';
const REMOVE_DATA = 'remove.json';
const SOURCE_PATH = path.join(__dirname, "./{{filename}}.zip");
const DESTINATION_PATH = path.join(__dirname, "../../../../", config.views.path, "/uploads/{{filename}}.zip");

var articles = [];
var authors;

before(function(done){
  database.query(CURR_DIR, INSERT_DATA)
  .then(dump)
  .then(() => {
    done();
  }).catch((err) => {
    console.log(err);
    done(err);
  });
});

after(function(done){
  new Promise((resolve, reject) => {
    server
      .get(routing['uploader/report'])
      .expect(200)
      .end(function(err, res) {
        if(err) reject(err);
        else resolve(res);
      });
  }).then(() => {
    return database.query(CURR_DIR, REMOVE_DATA);
  }).then(() => {
    done();
  }).catch((err) => {
    return database.query(CURR_DIR, REMOVE_DATA)
    .then(() => {
      console.log(err);
      done(err);
    });
  });
});

it("should be able to read the article from the browser", function(done) {
  this.timeout(4000);
  var data;
  upload({filename: "test-file-1"})
  .then(get_report)
  .then((result) => data = result)
  .then(test_in_browser(this))
  .then((data) => {
    articles.push(data);
    done();
  }).catch((err) => {
    if(!err) err = new Error("Issue found");
    articles.push(data);
    console.log(err);
    done(err);
  });
});

it("should be able to render the article with all the images in the browser", function(done) {
  this.timeout(4000);
  var data;
  upload({filename: "test-file-2"})
  .then(get_report)
  .then((result) => data = result)
  .then(test_in_browser(this))
  .then((data) => {
    articles.push(data);
    done();
  }).catch((err) => {
    if(!err) err = new Error("Issue found");
    articles.push(data);
    console.log(err);
    done(err);
  });
});

function upload(data){
  const source = SOURCE_PATH.replace("{{filename}}", data.filename);
  const destination = DESTINATION_PATH.replace("{{filename}}", data.filename);
  return new Promise((resolve, reject) => {
    fswrapper.copy(source, destination, function(err) {
      if(err){
        reject(err);
      }else{
        setTimeout(() => resolve(data), 3000);
      }
    });
  });
}

function get_report(data){
  return new Promise((resolve, reject) => {
    server
      .get(routing['uploader/report'])
      .send(data)
      .end(function(err, res) {
        //Request error
        if(err){
          reject(err);
        //Error was thrown alongside the uploading
        }else if(res.body.data && res.body.data.error){
          reject(res.body.data.error);
        //Email notification catch error
        }else if(res.body.error){
          reject(res.body.error);
        }else if(!res.body.data){
          reject(new Error("Body is empty"));
        }else{
          resolve(res.body.data.data);
        }
      });
  });
}

function test_in_browser(self){
  return (data) => {
    console.log("Go test in the browser, see if everything is fine");
    console.log(`Your URL is: localhost:8888/blog/${data.article.url}`);
    console.log(`Your shortened URL is: localhost:8888/blog/${data.article.hash}`);
    return stop.confirm.apply(self);
  };
}

function dump(){
  Author.find({username: /^test-/})
  .then((all) => {
    authors = all;
    return Promise.resolve();
  });
}
