const mongoose = require('mongoose')

const bycrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

userSchema.pre('save', function (next) {

  var user = this

  if(user.isModified('password')) {
    // encrypting the password
    bycrypt.genSalt(saltRounds, function(err, salt) {
      if(err) return next(err)

      bycrypt.hash(user.password, salt, function(err, hash) {
        if(err) return next(err)
        user.password = hash
        next()
      })
    })
  }
  
})

/* Model은 Schema를 감싸주는 역할 */ 
const User = mongoose.model('User', userSchema)
module.exports = { User }
