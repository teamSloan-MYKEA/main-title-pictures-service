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
var stream = fs.createWriteStream('./pictures.csv', {flags: 'as+'});
// create an array of promises that take a random description and 6 random urls , write one line of the csv each
for (var i = 0; i < 1000000; i++) {
  writeArray.push(new Promise((resolve, reject) => {
    //TODO
    // onto the csv file one line
    var randomItem = randomPictureItem();
    stream.write(`${randomItem.description},${randomItem.picture1},${randomItem.picture2},${randomItem.picture3},${randomItem.picture4},${randomItem.picture5},${randomItem.picture6},`);
  }));
}

Promise.all(writeArray).then(() => console.log('all data written'));
// promise.all to signal completion