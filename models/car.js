import {Schema, model, models} from "mongoose"

const CarSchema = new Schema({


    costumer_id:{
        type: String,
        trim: true,
        default:"express-autos",
        
    }, 
    name: {
        type: String,
        trim: true,
        default:"Not Available",
    },
    quantity: {
        type:String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    },
    price: {
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    },
   
    discountPrice:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    cylinders:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    color:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    }, 
    drive:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    liters:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    keys:{
        type: String,
        default:"Not Available",
        trim: true,
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    fuel:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    odometer:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    engineType:{

        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    transmission:{
        type: String,
        default:"Not Available",
        trim: true,
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    bodyStyle:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    primaryDamage:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    stockNumber:{
        type: String,
        trim: true,
        default:"Not Available",
        maxlength: [20, "name must not be greater than 20 characters"]
    
    },
    imageViews:{
        type:Array,
        default: []
    },

    date_sold: {
        type: Date,
        default: Date.now
    },
  

    

    make: {
        type: String,
        default: 'Anonymous'
    }



}, { timestamps: true })


const Car = models.Car || model('Car', CarSchema)

export default Car