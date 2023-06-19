const {DateTime} = require("luxon");

const nowUTC = () => {
  return DateTime.utc();
}


module.exports = {
  nowUTC
}
