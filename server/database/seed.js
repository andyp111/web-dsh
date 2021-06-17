const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const faker = require('faker');
const fs = require('fs');

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 4,
        min: 2
    },

    wordsPerSentence: {
        max: 16,
        min: 8
    }
})

const test = lorem.generateParagraphs(2);
console.log(test);


const passwordd = 'password';
const emaild = 'testemail@gmail.com';
let userleveld = ['Junior', 'Mid', 'Senior'];
const dates = [new Date(2020, 5, 21), new Date(2019, 8, 3), new Date(2006, 3, 15), new Date(2020, 10, 11), new Date(2020, 9, 27), new Date(2020, 3, 30)];

const generateUser = () => {
    let userString = '';
    let username = faker.internet.userName().toString();
    let password = passwordd;
    let email = emaild;
    let userlevel = userleveld[Math.floor(Math.random() * 3)].toString()

    userString += username + ',';
    userString += password + ',';
    userString += email + ',';
    userString += userlevel + '\n';

    return userString;

}

const generatePost = () => {
    //this is only for userid 1
    //test1 test1
    let photosObj = {};
    let photosArr = [];
    let p = '';
    let title = faker.lorem.words().toString();
    let body = lorem.generateParagraphs(2).toString();
    for (let i = 1; i <= 3; i++) {
        let photos = faker.image.imageUrl();
        photosObj[i] = photos;
    };
    let datecreated = dates[Math.floor(Math.floor(Math.random() * 5))].toDateString();
    let userId = 1;
    photosArr.push(photosObj);
    p += title + ',';
    p += body + ',';
    p += JSON.stringify(photosArr) + ',';
    p += datecreated + ',';
    p += userId + '\n';

    return p;
}

let postWriteStream = fs.createWriteStream('posts.csv', { flags: 'a' });

postWriteStream.write('title, body, photos, datecreated, userId\n', 'utf8');

const postsFunc = (n) => {
    for (let i = 0; i < n; i++) {
        let postsData = '';
        postsData += generatePost();
        postWriteStream.write(postsData)
    }
}

postsFunc(10);

postWriteStream.on("open", () => {
    console.log("Stream opened");
});
postWriteStream.on("ready", () => {
    console.log("Stream ready");
});

postWriteStream.on("finish", () => {
    console.log("Stream finished");
});