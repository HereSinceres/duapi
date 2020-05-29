const sign = require("./sign");
const hashQ = (query) => {
  query.sign = sign(query);
  console.log(query.sign);
  return Object.keys(query)
    .map((key) => key + "=" + encodeURIComponent(query[key]))
    .join("&");
};

module.exports = hashQ;
