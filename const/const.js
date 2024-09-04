const timeRegexp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const dateRegexp =
  /^(202[3-9]|20[3-9]\d|2[1-9]\d{2}|[3-9]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

module.exports = {
  timeRegexp,
  dateRegexp,
};
