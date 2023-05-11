const axios = require("axios");

// Controller for listing users
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

// Controller for user details
const getUserDetail = async (req, res) => {
  try {
    const { username } = req.params;

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    res.json(response.data);
    console.log(response)
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Error user does not exist" });
  }
};

// Controller for user Repos
const getUserRepos = async (req, res) => {
  try {
    const { username } = req.params;

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    res.json(response.data);
    console.log(response)
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Error user does not exist" });
  }
};


module.exports = {
  getUsers,
  getUserDetail,
  getUserRepos,
};
