const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    try {
        throw new Error('Тестовая ошибка');
    } catch (error) {
        const logMessage = `${new Date().toISOString()} - ${error.message}\n`;

        fs.appendFile('errors.log', logMessage, 'utf8', (err) => {
            if (err) {
                console.error('Ошибка записи в лог:', err.message);
            }
        });

        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000');
});