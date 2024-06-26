// argv
//console.log(process.argv);
//console.log(process.argv[3]);

// process.env
console.log(process.env);
console.log(process.env.LOGNAME);

//pid 
console.log(process.pid);

//cwd
console.log(process.cwd());

//title
console.log(process.title);

//memory usage
console.log(process.memoryUsage());

// uptime
console.log(process.uptime());

//exit
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.exit(0);

console.log('Hello after exit');