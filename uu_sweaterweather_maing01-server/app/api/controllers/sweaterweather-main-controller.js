"use strict";
const SweaterweatherMainAbl = require("../../abl/sweaterweather-main-abl.js");

class SweaterweatherMainController {
  init(ucEnv) {
    return SweaterweatherMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new SweaterweatherMainController();
