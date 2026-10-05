const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (req.method === 'PUT') {
        res.statusCode = 200;
        res.end('PUT-запрос обработан');
    } else if (req.method === 'DELETE') {
        res.statusCode = 200;
        res.end('DELETE-запрос обработан');
    } else {
        res.statusCode = 405;
        res.setHeader('Allow', 'PUT, DELETE');
        res.end('Метод не поддерживается');
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000');
});