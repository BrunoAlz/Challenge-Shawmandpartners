const axios = require("axios");
const { parseNextLink, extractSinceFromLink } = require("../utils/pagination");
require("dotenv").config();
const token = process.env.TOKEN;

// Controller for listing users
const getUsers = async (req, res) => {
  try {
    const { since } = req.query;
    const perPage = 20;

    const response = await axios.get(
      `https://api.github.com/users?since=${since}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const nextPageLink = parseNextLink(response.headers.link);
    const nextSince = extractSinceFromLink(nextPageLink);

    res.json({
      users: response.data,
      since: nextSince,
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
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
