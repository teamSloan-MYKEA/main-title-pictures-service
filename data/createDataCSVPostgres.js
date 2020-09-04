const fs = require('fs');
const faker = require('faker');

// create a pictureitem that has a random description and 6 random urls
function randomPictureItem() {
  function randomPictureUrl() {
    // TODO
    // whatever is my url with a random ending
    return `https://githubimagehrri.s3.us-east-2.amazonaws.com/${Math.floor(Math.random() * 30).toString().padStart(2, '0')}.jpg`;
    // https://githubimagehrri.s3.us-east-2.amazonaws.com/01.jpg
  }
  return {
    description: faker.lorem.sentence(30),
    picture1: randomPictureUrl(),
    picture2: randomPictureUrl(),
    picture3: randomPictureUrl(),
    picture4: randomPictureUrl(),
    picture5: randomPictureUrl(),
    picture6: randomPictureUrl(),
  }
}

var writeArray = [];

var stream = fs.createWriteStream(`./data/postgres_data/pictures.csv`, {flags: 'as+'});
for (var i = 1; i < 1000001; i++) {
  var randomItem = randomPictureItem();
  writeArray.push(new Promise(() => stream.write(`${randomItem.description},${randomItem.picture1},${randomItem.picture2},${randomItem.picture3},${randomItem.picture4},${randomItem.picture5},${randomItem.picture6}\n`)));
}

Promise.all(writeArray)
  .then(() => console.log('all csv created'));