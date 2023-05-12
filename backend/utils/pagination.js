const parseNextLink = (linkHeader) => {
  if (!linkHeader) {
    return null;
  }

  const links = linkHeader.split(", ");
  const nextPageLink = links.find((link) => link.includes('rel="next"'));
  const prevPageLink = links.find((link) => link.includes('rel="prev"'));
  console.log(links);
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
  return params.get("since");
};

module.exports = {
  parseNextLink,
  extractSinceFromLink,
};
