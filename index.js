const express = require('express');
const app = express();
const port = 3333;

app.get('/', (request, response) => {
    response.send(`
        <p>
            <a href="/about-us">About Us</a>
        </p>
        <p>
            <a href="/random-route/${randomKey()}">Go to random route</a>
        </p>
    `);
});

app.get('/about-us', (request, response) => {
    response.send('<a href="/">Back to homepage</a>');
});

app.get('/random-route/:random_key', (request, response) => {
    const randomId = randomKey()
    response.send(`
        <p><a href="/random-route/${randomId}">Go to route: ${randomId}</a></p>
        <p><a href="/">Go back to homepage</a></p>
    `)
})

app.listen(port, () => {
    console.log(`this app is running in port ${port}`); // eslint-disable-line no-console
});

const randomKey = () => Math.random().toString(32).slice(2)
