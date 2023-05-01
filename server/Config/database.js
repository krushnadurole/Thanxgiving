const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({path:"Config/config.env"})
const connectoMongo = ()=>{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology :true
    }).then(con=>{
        console.log(`mognodb Database connected with Host:${con.connection.host}`)
    })
}

module.exports = connectoMongo