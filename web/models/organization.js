const mongoose = require(`mongoose`);
const bcrypt = require(`bcryptjs`);
const Q = require('q');

var Schema = mongoose.Schema;

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
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
}, {collection: 'organization', timestamp: true});

organizationSchema.statics.addOrganization = function(newOrganization) {
    let deferred = new Q.defer();
    newOrganization.save((err) => {
      if(err) {
        console.log(err);
        deferred.resolve({success:false, message:`Error saving the organization ${newOrganization.name}`});
      } else {
        deferred.resolve({success:true, message:`Organization ${newOrganization.name} saved successfully`});
      }
    });
    return deferred.promise;
},

organizationSchema.statics.getAllOrgsOf

export default mongoose.model('organization', organizationSchema);
