const User = require('../models/User');

const userController = (function () {
    return {
        getUsers: function (req, res, next) {
            User.find()
                .then(users => {
                    console.log(users);
                })
                .catch(err => console.log(err));
        },
        postUser: function (req, res) {
            const newUser = new User({
                emp_id: req.body.emp_id,
                name: req.body.name,
                email: req.body.email,
                avatar: req.body.avatar,
                role: req.body.role
            });
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        }
    };
})();

module.exports = userController;