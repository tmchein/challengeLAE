const User = require('../models/User');

exports.createUser = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    //crea el nuevo usuario
    user = new User(req.body);

    //guardar el nuevo usuario
    await user.save();

    //mensaje de confirmacion
    res.json({ msg: 'Usuario creado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un error');
  }
};