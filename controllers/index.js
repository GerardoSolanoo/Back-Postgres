const models = require("../database/models");

const createharry = async (req, res) => {
  try{
     const Harry = await models.Harry.create(req.body);
     return res.status(201).json({
        Harry
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

const getAllharry = async (req, res) => {
  console.log('Obteniendo Magos');
  try {
    const harry = await models.Harry.findAll({
      include: [
        ]
    });
    return res.status(200).json({ harry });
  } catch(error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createharry,
  getAllharry
};