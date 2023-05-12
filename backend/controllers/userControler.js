const axios = require("axios");
const {
  parseNextLink,
  extractSinceFromLink,
  getNextPageNumberForRepos,
  getLastPageNumberForRepos,
} = require("../utils/pagination");
require("dotenv").config();
const token = process.env.TOKEN;

// list users Controler
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

// get user details Controller
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

// get User Repos
const getUserRepos = async (req, res) => {
  try {
    const { username } = req.params;
    const { page } = req.query;
    const perPage = 15;

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const linkHeader = response.headers.link;
    const nextPageLink = getNextPageNumberForRepos(linkHeader);
    const lastPageLink = getLastPageNumberForRepos(linkHeader);

    res.json({
      repos: response.data,
      nextPage: nextPageLink,
      lastPage: lastPageLink,
    });
  } catch (error) {
    res.status(404).json({ error: "Error user does not exist" });
  }
};

module.exports = {
  getUsers,
  getUserDetail,
  getUserRepos,
};
