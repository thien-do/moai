const base = require("../story/tailwind.config");

module.exports = {
  ...base,
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
};
