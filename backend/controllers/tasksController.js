const Task = require('../models/Task');
const User = require('../models/User');

// Crear una nueva tarea

exports.createTask = async (req, res) => {
  const { userid } = req.body;
  try {
    const user = await User.findById(userid);

    if (!user) {
      return res.status(404).json({ msg: 'usuario no encontrado' });
    }

    //

    const task = new Task(req.body);
    await task.save();
    res.json({ task });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Hubo un error');
  }
};
