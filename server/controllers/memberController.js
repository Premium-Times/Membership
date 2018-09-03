
const Member = require("../models/member");
const { validationResult } = require('express-validator/check');

// Display list of all members.
exports.member_list = (req, res, next) => {
      Member.find()
        .exec( (err, members) => {
          if (err) { 
              res.send({"error": err});
              return next(err); 
            }
          //Successful, so send data
          // console.log(list_levels);
          res.type('json');
          res.status(200);
          res.json({members});
        });
};

// Display detail page for a specific member.
exports.member_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: member detail: ' + req.params.id);
};

// Display member create form on GET.
/* exports.member_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: member create GET');
}; */

// Handle member create on POST.
// TODO: complete implementation of sanitozation
// Encrypt password
exports.member_create_post = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }  
  const newMember = new Member({
      first_Name: req.body.first_Name,
      last_Name: req.body.last_Name,
      email: req.body.email,
      password: req.body.password,
  });
  newMember.save((error) => {
      if(error){
        return res.status(422).json({ errors: error });
      }
      res.status(200).json({"Success": `${newMember.first_Name} Successfully Registered!`});
  })
  
};

// Display member delete form on GET.
exports.member_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: member delete GET');
};

// Handle member delete on POST.
exports.member_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: member delete POST');
};

// Display member update form on GET.
exports.member_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: member update GET');
};

// Handle member update on POST.
exports.member_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: member update POST');
};