var db = require("../models");

module.exports = function(app) {
  //Get all entered burgers in the database.
  app.get("/api/burgers", function(req, res) {
    db.Burgers.findAll({}).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  });
