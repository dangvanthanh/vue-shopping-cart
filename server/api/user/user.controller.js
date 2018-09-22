const bcrypt = require('bcrypt');
const User = require('./user.model');
const saltRounds = 10;

module.exports = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          res.status(201).json({
            sucess: true
          });
        } else {
          res.status(201).json({
            msg: 'Wrong username or password'
          });
        }
      } else {
        res.status(201).json({
          msg: 'Required username or password'
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  signup: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const hash = await bcrypt.hash(password, saltRounds);

      const user = new User({
        username,
        password: hash
      });

      await user.save();

      res.status(201).json({
        success: 'signup'
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
