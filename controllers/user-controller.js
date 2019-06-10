const jwt = require('jsonwebtoken');
const { User } = require('../models');
const handle = require('../utils/promise-handler')

const secret = 'topsecret';

//function to register an create a new user 
const register = (req, res) => {
  console.log(req.body);

  //get info about user 
  const { email, password, firstName, lastName } = req.body;

  //create a new user
  const user = new User({ email, password, firstName, lastName });

  //save the user 
  user.save(err => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: 'Error registering new user, please try again.'
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Welcome to fantasy football mojo!'
      });
    }
  });
};

// function for logging in a user
const login = async (req, res) => {

  // get email and password out of req.body
  const { email, password } = req.body;

  console.log(req.body);

  // find user based on email
  const [findUserErr, userInfo] = await handle(User.findOne({ email }));

  if (findUserErr) {
    console.log(findUserErr);
    res.status(500).json({
      error: 'Internal error, try again'
    });
  } else if (!userInfo) {
    console.log("no user found!")
    res.status(401).json({
      error: 'Incorrect email'
    });
  } else {
    // check to see if password matches user's password
    const [pwErr, same] = await handle(userInfo.isCorrectPassword(password));

    if (pwErr) {
      console.log(pwErr);
      res.status(500).json({
        error: 'Internal error please try again!'
      });
    } else if (!same) {
      console.log("incorrect password");
      res.status(401).json({
        error: 'Incorrect password!'
      });
    } else {
      // issue  JWT
      const payload = {
        _id: userInfo._id,
        email: userInfo.email
      };
      // sign jwt
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      });

      // respond with web token to the front end
      res.cookie("token", token, {httpOnly: true}).status(200).json(token);
    }
  }
};

// get user profile
const getUserProfile = async (req, res) => {
  const [userErr, userProfile] = await handle
    (User.findById(req._id));

  if (userErr) {
    res.status(500).json(userErr);
  } else {
    res.status(200).json(userProfile)
  }
};

module.exports = {
  getUserProfile,
  login,
  register
};


