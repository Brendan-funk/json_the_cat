const request = require('request');
const arg = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`,(error,response,body) => {
  if (error !== null) {
    console.log('error: ', error);
    return;
  }
  if (body === '[]') {
    console.log('Breed not found');
    return;
  }
  const data = JSON.parse(body);
  const description = data[0].description;
  console.log('description: ',description);
  return;
});