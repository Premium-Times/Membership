const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LevelSchema = new Schema(
  {
    title: {type: String, required: true, max: 100},
    descpriptors: [String],
    monthly: Number,
    annual: Number
    
  }
);

// Virtual for Level's full description through url

// Virtual for author's URL
LevelSchema
.virtual('url')
.get(function () {
  return '/level/' + this._id;
});

//Export model
module.exports = mongoose.model('Level', LevelSchema);