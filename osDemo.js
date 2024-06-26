import os from 'os';

// Importa il modulo 'os' che fornisce funzioni utili per ottenere informazioni sul sistema operativo
const os = require('os');

// Ottiene le informazioni sull'utente corrente e le stampa nella console
console.log(os.userInfo());
// Esempio di output: { uid: 501, gid: 20, username: 'user', homedir: '/Users/user', shell: '/bin/bash' }

// Ottiene la piattaforma del sistema operativo (es. 'darwin' per macOS, 'win32' per Windows, 'linux' per Linux)
console.log(os.platform());
// Esempio di output: 'darwin'

// Ottiene l'architettura della CPU (es. 'x64', 'arm', ecc.)
console.log(os.arch());
// Esempio di output: 'x64'

// Ottiene informazioni sulle CPU disponibili nel sistema e le stampa nella console
console.log(os.cpus());
// Esempio di output: [ { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz', speed: 2200, times: { user: 2048380, nice: 0, sys: 1314200, idle: 7649130, irq: 0 } }, ... ]

// Ottiene la quantità totale di memoria di sistema in byte
console.log(os.totalmem());
// Esempio di output: 17179869184 (16 GB)

// Ottiene la quantità di memoria libera di sistema in byte
console.log(os.freemem());
// Esempio di output: 4294967296 (4 GB)
