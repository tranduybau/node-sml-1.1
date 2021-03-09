const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Trang chủ')
})

app.get('/about-us', (request, response) => {
    response.send('Thông tin về chúng tôi')
})

app.get('/detail', (request, response) => {
    response.send('Chi tiết bài viết')
})

// dynamic routing
app.get('/categories/:category_id', (request, response) => {
    console.log(request.params.category_id, '--- request.params.category_id'); // eslint-disable-line no-console
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
