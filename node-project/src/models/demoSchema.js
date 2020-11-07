const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  field1: {
    type: String,
    required: true
  },
  field2: {
    type: String,
    required: true
  },
  field3: {
    type: String,
    required: true
  }
},{
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
});

demoSchema.virtual('virtualField', {
  ref:'User',
  localField:'_id',
  foreignField:'demoSchemaRef',
  justOne:false
})


module.exports = mongoose.model("DemoSchema", demoSchema);
