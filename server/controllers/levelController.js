const Level = require("../models/level");

// Display list of all levels.
exports.level_list = (req, res, next) => {
      Level.find()
        .exec( (err, levels) => {
          if (err) { 
              res.send({"error": err});
              return next(err); 
            }
          //Successful, so send data
          // console.log(list_levels);
          res.status(200);
          res.send(levels);
        });
};

// Display detail page for a specific level.
exports.level_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: level detail: ' + req.params.id);
};

// Display level create form on GET.
exports.level_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: level create GET');
};

// Handle level create on POST.
exports.level_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: level create POST');
};

// Display level delete form on GET.
exports.level_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: level delete GET');
};

// Handle level delete on POST.
exports.level_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: level delete POST');
};

// Display level update form on GET.
exports.level_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: level update GET');
};

// Handle level update on POST.
exports.level_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: level update POST');
};