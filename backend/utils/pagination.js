const parseNextLink = (linkHeader) => {
  if (!linkHeader) {
    return null;
  }

  const links = linkHeader.split(", ");
  const nextPageLink = links.find((link) => link.includes('rel="next"'));
  if (!nextPageLink) {
    return null;
  }

  const match = nextPageLink.match(/<([^>]+)>/);
  if (!match) {
    return null;
  }

  return match[1];
};

const extractSinceFromLink = (link) => {
  if (!link) {
    return null;
  }

  const params = new URLSearchParams(new URL(link).search);

  if (params.has("since")) {
    return params.get("since");
  } else if (params.has("page")) {
    const page = params.get("page");
    const perPage = params.get("per_page");
    const since = (parseInt(page) - 1) * parseInt(perPage);
    return since.toString();
  }

  return null;
};

const extractPageNumberFromLink = (linkHeader, rel) => {
  if (!linkHeader || !rel) {
    return null;
  }

  const links = linkHeader.split(", ");
  const targetLink = links.find((link) => link.includes(`rel="${rel}"`));
  if (!targetLink) {
    return null;
  }

  const match = targetLink.match(/page=(\d+)/);
  if (!match) {
    return null;
  }

  return match[1];
};

const getNextPageNumberForRepos = (linkHeader) => {
  return extractPageNumberFromLink(linkHeader, "next");
};

const getLastPageNumberForRepos = (linkHeader) => {
  return extractPageNumberFromLink(linkHeader, "last");
};

module.exports = {
  parseNextLink,
  extractSinceFromLink,
  getNextPageNumberForRepos,
  getLastPageNumberForRepos,
};
