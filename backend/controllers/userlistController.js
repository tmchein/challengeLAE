const User = require('../models/User');

exports.getUserlist = async (req, res) => {
  try {
    let userlist = await User.find({}).select('-password');
    res.send(userlist);
  } catch (error) {
    console.log(error);
    res.status(401).send('No hay usuarios en la lista de usuarios');
  }
};
