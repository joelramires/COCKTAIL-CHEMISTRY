const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
   type: String,
   required: true,
   unique: true,
   match: [/.+@.+\../, "A valid email address must be used!"]
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String, 
    trim: true,
    required: true,
  }
});

UserSchema.pre('save', function createPassword(next) {

  if (this.isNew || this.isModified('password')) {

    // save reference to what "this" means
    const document = this;

    // run bcrypt's hash method the create password
    bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
      
      if (err) {
        next(err);
      }
      else {
        // save new password
        document.password = hashedPassword;
        next();
      }
    });
  }
});

UserSchema.methods.isCorrectPassword = function isCorrectPassword(password) {

  const document = this;
  return new Promise((resolve, reject) => {

  
    bcrypt.compare(password, document.password, function compareCallback(err, same) {

      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        resolve(same);
      }
    });
  });
}

module.exports = mongoose.model('User', UserSchema);
