//import fs from 'fs';
import { read } from 'fs';
import fs from 'fs/promises';

/* // readfile() - callback
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if(err) throw err;

    console.log(data);
});
// readfile() - synchronous version
const data = fs.readFileSync('./test.txt', 'utf8');
console.log(data); */

/* // readfile() - Promise .then()
fs.readFile('./test.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err)); */

// readfile() - async await
const readfile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// writefile()
const writefile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello World', 'utf8');
        console.log('done');
    } catch (err) {
        console.log(err);
    }
}

// appendfile()
const appendfile = async () => {
    try {
         fs.appendFile('./test.txt',' Dante Alighieri', 'utf8');
        console.log('done');
    } catch (err) {
        console.log(err);
    }
}

//writefile();
appendfile();
readfile();