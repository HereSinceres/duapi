const sign = require("./sign");
const hashQ = (query) => {
  query.sign = sign(query);
  return Object.keys(query)
    .map((key) => key + "=" + encodeURIComponent(query[key]))
    .join("&");
};

module.exports = hashQ;
