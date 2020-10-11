/** packages */

const mongoose = require("mongoose");
const validator=require("mongoose-unique-validator")

/**Schema creation */
const facultySchema = new mongoose.Schema({
    code: {
        
        type:"String",
        required:true,
        unique:true
    },
    name: {
        
        type:"String",
        required:true
    },
    dean_name: {
       
        type:"String",
        required:true
    }
});
/**schema exportation */
facultySchema.plugin(validator);
module.exports = facultySchema;