const User = require('../models/User');

exports.getUserlist = async (req, res) => {
  try {
    let userlist = await User.find({}).select('-password');
    res.json({ userlist });
  } catch (error) {
    console.log(error);
    res.status(400).send('No hay usuarios en la lista de usuarios');
  }
};
