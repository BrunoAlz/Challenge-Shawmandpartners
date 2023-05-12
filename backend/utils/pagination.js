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

const getNextPageLinkForRepos = (linkHeader) => {
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

module.exports = {
  parseNextLink,
  extractSinceFromLink,
  getNextPageLinkForRepos,
};
