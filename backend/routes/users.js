const router = require("express").Router();
let User = require("../models/users.model");

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const dob = Date.parse(new Date());

  const newUser = new User({
    username,
    gender,
    dob
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.username = req.body.username;
      users.description = req.body.gender;
      users.date = Date.parse(req.body.dob);

      users
        .save()
        .then(() => res.json("User updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
