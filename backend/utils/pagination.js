const parseLinkHeader = (linkHeader) => {
  const links = linkHeader.split(", ");
  const parsedLinks = {};

  links.forEach((link) => {
    const [url, rel] = link.split("; ");
    const [, path] = url.match(/<([^>]+)>/);
    const [, relType] = rel.match(/"([^"]+)"/);

    parsedLinks[relType] = path;
  });

  return parsedLinks;
};

module.exports = {
  parseLinkHeader,
};
