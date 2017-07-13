const mongoose = require(`mongoose`);
const bcrypt = require(`bcryptjs`);
const Q = require('q');

var Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    organization: [String],
    createdDate: {
      type: Date,
      default: Date.now
    }
}, {collection: 'user', timestamp: true});

userSchema.statics.getUserById = function(id, callback) {
    this.findById(id, callback);
},

userSchema.statics.getUserByEmail = function(email, callback) {
    const query = { email: email };
    this.findOne(query, callback);
},

userSchema.statics.addUser = function(newUser) {
    let deferred = new Q.defer();
    bcrypt.genSalt(10, (err, salt) => {
        if(err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save((err)=>{
              if(err){
                console.log(err);
                deferred.resolve({success:false, message:`Error saving the user ${newUser.firstName}`});
              }else{
                deferred.resolve({success:true, message:`User ${newUser.firstName} saved successfully`});
              }
            });
        });
    });
    return deferred.promise;
},

userSchema.statics.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(err, isMatch);
    });
  }

export default mongoose.model('user', userSchema);
