const request = require('request');

const fetchBreedDescription = function(breedName,callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response,body) => {
    if (body === '[]') {
      error = 'invalid breed';
      callback(error,null);
      return;
    }
    const bodyObject = JSON.parse(body);
    const description = bodyObject[0].description;
    callback(error,description);
  });
};
module.exports = {fetchBreedDescription};