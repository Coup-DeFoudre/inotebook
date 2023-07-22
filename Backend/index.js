const connectDB = require('./db');
const express = require('express')
const cors = require('cors')

connectDB();

const app = express()
const port = 5000;

//using middleware to get data from req.body in json format 
app.use(express.json());
app.use(cors())

//using Routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook server listening on http://localhost:${port}`)
})