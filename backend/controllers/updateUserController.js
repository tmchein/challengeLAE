const User = require('../models/User');

exports.updateUser = async (req, res) => {
  const { firstName, lastName, phone, email } = req.body;
  try {
    const updateNewUserData = {};
    updateNewUserData.firstName = firstName;
    updateNewUserData.lastName = lastName;
    updateNewUserData.phone = phone;
    let user = await User.findOneAndUpdate({ email }, updateNewUserData);
    if (!user) {
      return res.status(400).send('Este usuario no existe');
    }

    res.status(200).send('Usuario editado satisfactoriamente');
  } catch (error) {
    console.log(error);
    res.status(400).send('Error al editar el usuario');
  }
};
