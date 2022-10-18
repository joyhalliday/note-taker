const express = require('express');

const app = express();

const PORT = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);