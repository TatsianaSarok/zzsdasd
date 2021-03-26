"use strict";

const SweaterweatherMainUseCaseError = require("./sweaterweather-main-use-case-error.js");
const GATEWAY_ERROR_PREFIX = `${SweaterweatherMainUseCaseError.ERROR_PREFIX}gateway/`;

const Create = {
  UC_CODE: `${GATEWAY_ERROR_PREFIX}create/`,
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
      this.code = `${Create.UC_CODE}gatewayDaoCreateFailed`;
      this.message = "Create gateway failed.";
    }
  }
};

const Update = {
  UC_CODE: `${GATEWAY_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  SubjectDaoUpdateFailed: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}gatewayDaoUpdateFailed`;
      this.message = "Update gateway by gateway Dao update failed.";
    }
  }
};

const Get = {
  UC_CODE: `${GATEWAY_ERROR_PREFIX}get/`,
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
  UC_CODE: `${GATEWAY_ERROR_PREFIX}delete/`,
  InvalidDtoIn: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
}
};

const List = {
  UC_CODE: `${GATEWAY_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends SweaterweatherMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
}
};

module.exports = {
  List,
  Delete,
  Get,
  Update,
  Create
};
