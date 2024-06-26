//const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

//console.log(`${generateRandomNumber()} and ${celciusToFahrenheit(0)}`);

import  getPosts, { getPostsLength } from "./postController.js";


console.log(getPosts());
console.log(getPostsLength());