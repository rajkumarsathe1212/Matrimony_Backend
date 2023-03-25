let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name : { type : String, required : true},
        ownername : { type : String},
        address : { type : String},
        townid : { type : String},
        tagline : { type : String, required : true},
        email : { type : String},
        mobileno : { type : String},
        password : { type : String},
        website : { type : String},
        logopath : { type : String },
        accountopeningdate : { type : Date},
        accountexpdate : { type : Date},
        status : { type : Boolean, required : true},
    }
)

let Business = mongoose.model("businesses", schema);

module.exports = Business;