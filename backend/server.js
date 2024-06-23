const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config({ path: './config.env' });


const port = process.env.PORT || 5000;
const DB = process.env.DB.replace('<password>', process.env.PASSWORD);

mongoose.connect(DB).then((con) => {
    console.log(con.connections);
    console.log('Db connection successful')
})



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
