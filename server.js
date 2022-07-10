const express = require('express');
const app = express();

const path = require('path')

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, './views/'))
app.set('view engine', 'ejs');
app.use("/public", express.static('public'))


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT},
    http://localhost:${PORT}`);
});