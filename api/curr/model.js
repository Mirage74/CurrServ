const mongoose = require('mongoose')
const beautifyUnique = require('mongoose-beautiful-unique-validation')
mongoose.plugin(beautifyUnique)

const currSchema = new mongoose.Schema({
  pair : String, 
  rate : Number
}, {
  timestamps: false
})


currSchema.statics.publicFields = ['pair', 'rate']
const currModel = mongoose.model('Curr', currSchema)
module.exports = currModel
