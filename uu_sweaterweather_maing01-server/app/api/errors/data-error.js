"use strict";

const SweaterweatherMainUseCaseError = require("./sweaterweather-main-use-case-error.js");
const DATA_ERROR_PREFIX = `${SweaterweatherMainUseCaseError.ERROR_PREFIX}data/`;

const Create = {
  UC_CODE: `${DATA_ERROR_PREFIX}create/`,
  InvalidDtoIn: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  GatewayDaoCreateFailed: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}dataDaoCreateFailed`;
      this.message = "Create data failed.";
    }
  }
};

// const List = {
//   UC_CODE: `${DATA_ERROR_PREFIX}list/`,
//   InvalidDtoIn: class extends SweaterweatherMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Delete.UC_CODE}invalidDtoIn`;
//       this.message = "DtoIn is not valid.";
//     }
// }
// };

const Get = {
  UC_CODE: `${DATA_ERROR_PREFIX}get/`,
  InvalidDtoIn: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  SweaterweatherDoesNotExist: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}gatewayDoesNotExist`;
      this.message = "Sweaterweather does not exist.";
    }
  }
};

const Delete = {
  UC_CODE: `${DATA_ERROR_PREFIX}delete/`,
  InvalidDtoIn: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
}
};

const List = {
  UC_CODE: `${DATA_ERROR_PREFIX}list/`,
  
};

const GetCurrent = {
  UC_CODE: `${DATA_ERROR_PREFIX}getCurrent/`,
  
};

module.exports = {
  GetCurrent,
  List,
  Delete,
  Get,
  Create
};
