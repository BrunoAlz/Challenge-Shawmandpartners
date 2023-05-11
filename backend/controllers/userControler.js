const axios = require("axios");
const { parseLinkHeader } = require("../utils/pagination");

// Controller for listing users
const getUsers = async (req, res) => {
  try {
    const { since } = req.query;
    const perPage = 10;

    const response = await axios.get(
      `https://api.github.com/users?since=${since}&per_page=${perPage}`
    );

    console.log(response.headers);
    const linkHeader = response.headers.link;
    const parsedLinks = parseLinkHeader(linkHeader);

    res.json({
      users: response.data,
      pagination: {
        nextPage: parsedLinks.next,
        prevPage: parsedLinks.prev,
        firstPage: parsedLinks.first,
        lastPage: parsedLinks.last,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error while connecting to the server" });
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
  } catch (error) {
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
  } catch (error) {
    res.status(404).json({ error: "Error user does not exist" });
  }
};

module.exports = {
  getUsers,
  getUserDetail,
  getUserRepos,
};
