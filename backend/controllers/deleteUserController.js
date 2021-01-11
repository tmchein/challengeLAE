const User = require('../models/User');

exports.deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOneAndDelete({ email });
    if (!user) {
      return res.status(400).send('Este usuario no existe');
    }

    res.status(200).send('Usuario borrado satisfactoriamente');
  } catch (error) {
    console.log(error);
    res.status(400).send('Error al eliminar un usuario');
  }
};
