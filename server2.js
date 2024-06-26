import { createServer } from 'http'; 
const PORT = process.env.PORT || 3000;

const users = [
    {id: 1, name: 'Carlo'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Jane'},
    {id: 4, name: 'Mary'}  
];

// Logger middleware
const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET requests to /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET requests to /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find(user => user.id === Number(id));
    if(req.method === 'GET' && req.url.match(/\/api\/users\/([0-9]+)/)) {
        const id = req.url.split('/')[3];
        const user = users.find(user => user.id === Number(id));
        if(user) {            
            res.write(JSON.stringify(user));           
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User not found'}));
        }
        res.end();
    }
}

//Route handler for POST requests to /api/users
const createUserHandler = (req, res) => {
    let body = '';
    //Listen for incoming data
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        console.log(users);
        res.end();  
    })


}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write('Route not found');
    res.end();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
       jsonMiddleware(req, res, () => {
           if(req.method === 'GET' && req.url === '/api/users') {
               getUsersHandler(req, res);
           } else if(req.method === 'GET' && req.url.match(/\/api\/users\/([0-9]+)/)) {
               getUserByIdHandler(req, res);
           } else if(req.url === '/api/users' && req.method === 'POST') {
               createUserHandler(req, res);
               
           }else {
               notFoundHandler(req, res);
           }
       })
    });

    
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));