const Element = require('../Models/Element');
const dotenv = require('dotenv');
const Elements = require('../data/Elements')

const connectoMongo = require('../Config/database');

dotenv.config({path:'backend/config.env'})

connectoMongo();

const seedElement = async(req,res,next)=>{
    try {
        await Element.deleteMany();
        console.log("Elements are deleted");
        await Element.insertMany(Elements);
        console.log("Elements are inserted");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedElement();