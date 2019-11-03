const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myContacts', {useNewUrlParser: true, useUnifiedTopology: true});

require('./models/contacts')

require('./router/index')(app)


// app.get('/', router)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
