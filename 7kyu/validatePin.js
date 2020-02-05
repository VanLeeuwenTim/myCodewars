// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

const validatePin = string => {
  const regex = /^[0-9]{4}$|^[0-9]{6}$/gm;
  return string.match(regex) != null;
};

module.exports = validatePin;
