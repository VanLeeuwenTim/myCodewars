const maskify = string => {
  return string.replace(/.(?=.{4,}$)/g, "#");
};

module.exports = maskify;
