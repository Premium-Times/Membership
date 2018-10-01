const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MemberSchema = new Schema(
  {
    first_Name: {type: String, required: true, max: 100},
    last_Name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    phone: String
    
  }
);

// Virtual for Level's full description through url

// Virtual for author's URL
MemberSchema
.virtual('url')
.get(function () {
  return '/level/' + this._id;
});

MemberSchema
.virtual("full_name")
.get( () => {
  return `${this.first_Name} ${this.last_Name}`;
})

//Export model
module.exports = mongoose.model('Member', MemberSchema);