const mongoose = require(`mongoose`);
const bcrypt = require(`bcryptjs`);
const Q = require('q');

var Schema = mongoose.Schema;

const serverSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    orgId: {
        type: String,
        required: true
    },
    isEnabled: {
      type: Boolean,
      default: true
    },
    createdUserId: {
        type: String,
        required: true
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
    modifiedUserId: {
        type: String,
        required: true
    },
    modifiedDate: {
      type: Date,
      default: Date.now
    }
}, {collection: 'server', timestamp: true});

serverSchema.statics.addServer = function(newServer) {
    let deferred = new Q.defer();
    newServer.save((err) => {
      if(err) {
        console.log(err);
        deferred.resolve({success:false, message:`Error saving the server ${newServer.name}`});
      } else {
        deferred.resolve({success:true, message:`Server ${newServer.name} saved successfully`});
      }
    });
    return deferred.promise;
}

export default mongoose.model('server', serverSchema);
