/** packages */

const mongoose = require("mongoose");
const validator=require("mongoose-unique-validator")

/**Schema creation */
const departmentSchema = new mongoose.Schema({
    code: {
       
        type:"String",
        required:true,
        unique:true
    },
    name: {
        
        type:"String",
        required:true
    },
    director_name: {
        
        type:"String",
        required:true
    },
    faculty_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_faculty",
        required: true,
    },
});
/**schema exportation */
departmentSchema.plugin(validator);
module.exports = departmentSchema;