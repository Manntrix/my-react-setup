/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@root": "src",
  })(config);

  return config;
};
