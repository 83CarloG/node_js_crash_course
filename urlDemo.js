import url from 'url';

const urlString = 'https://www.example.com/path/to/page?name=ferret&color=purple';

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url
console.log(import.meta.url);

// fileURLtoPAth()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('color'));
params.append('limit', 10);
console.log(params);
params.delete('color');
console.log(params);