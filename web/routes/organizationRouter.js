const router = require(`express`).Router();
const passport = require(`passport`);
const jwt = require(`jsonwebtoken`);
import {
  security as securityObject
} from '../../config';
import { Organization as OrganizationModel } from '../models';

router.post(`/add`, passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let newOrganization = new OrganizationModel({
        name:  req.body.name,
        description:  req.body.description,
        createdUserId: req.body.currentUserId,
        modifiedUserId: req.body.currentUserId
    });
    OrganizationModel.addOrganization(newOrganization).then((response)=>{
      res.json(response);
    });
});

router.get(`/orgObjects`, passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});


module.exports = router;
