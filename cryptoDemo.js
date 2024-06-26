import crypto from 'crypto';

// Importa il modulo 'crypto' che fornisce funzioni utili per criptare e decrittare dati
// creatHash()

/* const hash = crypto.createHash('sha256');
hash.update('hello');
console.log(hash.digest('hex')); */

// randomBytes()
/* crypto.randomBytes(16, (err, buf) => {
    if(err) throw err;
    console.log(buf.toString('hex'));
}) */

//createCipheriv & createDecipheriv

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Il mio nome è mai più', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);