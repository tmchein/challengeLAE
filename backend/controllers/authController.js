const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {
  //extraer email y password

  const { email, password } = req.body;

  try {
    //revisar que sea un usuario registrado
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'el usuario no existe' });
    }

    // Revisar la contrasena de la cuenta
    //comparo la contrasena con la contrasena del usuario
    const userPassword = await bcryptjs.compare(password, user.password);

    if (!userPassword) {
      return res.status(400).json({ msg: 'Password incorrecto' });
    }

    //Si todo es correcto crear y firmar el jwt

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
  }
};
