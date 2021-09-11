const fs = require("fs");
const {createServer: createHttpServer} = require('http');
const {createServer: createHttpsServer} = require("https");
const { parse } = require('url')
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();


const createServer = (handler) => {
    if (process.env.SSL_CERT_PATH && process.env.SSL_KEY_PATH) {
        const options = {
            key: fs.readFileSync(process.env.SSL_KEY_PATH),
            cert: fs.readFileSync(process.env.SSL_CERT_PATH),
        };
        console.log("Starting HTTPS server")
        return createHttpsServer(options, handler);
    }
    console.log("Starting HTTP server")
    console.log(process.env.API_URL)
    return createHttpServer(handler);
}

// WARNING: this file is not refreshed after it is changed. You have to restart the server.
app.prepare().then(() => {
    const port = parseInt(process.env.PORT);
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on port ${port}`);
    });
});