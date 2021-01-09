const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  console.log(req.body);

  //email y password
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    //crea el nuevo usuario
    user = new User(req.body);

    //Hashear la contrasea
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);
    //guardar el nuevo usuario
    await user.save();

    //crear y firmar el jwt
    const payload = {
      user: {
        id: user.id,
      },
    };

    //firmar el jwt
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600, //1 hora
      },
      (error, token) => {
        if (error) throw error;

        //Mensaje de confirmacion
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un error');
  }
};
