const http = require('http')

const server = http.createServer((req, res ) => {
    const authHeader = req.headers['authorization']
    console.log('Authorization Header:', authHeader);

    res.setHeader('Content-Type', 'text/plain');

    if (authHeader  === undefined) {
        res.statusCode = 401;
        res.end('Unauthorized');
    } else {
        res.statusCode = 200;
        res.end('Authorization header received');
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000');
});
    
