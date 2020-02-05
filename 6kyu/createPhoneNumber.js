const createPhoneNumber = array => {
  return array.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
};

module.exports = createPhoneNumber;
