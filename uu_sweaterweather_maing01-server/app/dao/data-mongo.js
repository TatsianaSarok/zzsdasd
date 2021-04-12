"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class DataMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async update(gateway) {
    let filter = { id: gateway.id, awid: gateway.awid };
    return await super.findOneAndUpdate(filter, gateway, "NONE");
  }

  async get(awid, id) {
    return await super.findOne({ awid, id });
  }

  async delete(awid, id) {
    await super.deleteOne({ awid, id });
  }

  async list(awid, gatewayName) {
    let filter = { awid };
    gatewayName && (filter.gatewayName = gatewayName);
    return await super.find(filter);
  }
}

module.exports = DataMongo;
