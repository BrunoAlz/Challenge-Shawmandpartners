const axios = require("axios");

// Controller para a listagem de usuários
const getUsers = async (req, res) => {
  try {
    const { since } = req.query;

    const response = await axios.get(
      `https://api.github.com/users?since=${since}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error getting list of users" });
  }
};

module.exports = {
  getUsers,
};
