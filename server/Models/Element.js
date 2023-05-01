const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({
    title:{
        type:String,
        required:[true,'please Enter the Product Name' ],
        trim:true,
        maxLength:[100,'Product name cannot exceet 100 characters']
    },
    description:{
        type:String,
        // required:[true,'please enter the product description']
    },
    category:{
        type:String,
        // required:[true,'please select Category for this Product'],
        enum:{
            values:[
               'Electronics',
               'Clothes',
               'Mobiles',
               'Laptops',
               'Food',
               'Grocery',
               'Books',
               'Shoes',
               'Vehicle',
               'Sports',
               'Watch',
               'others',
            ],
            message:'Please select category for product'
        },
        default:"others"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        
    },
    email:{
        type:String 
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('Product',ProductSchema)