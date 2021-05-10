"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class DataMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async update(gateway) {
    let filter = { id: gateway.id, awid: gateway.awid };
    return await super.findOneAndUpdate(filter, gateway, "NONE");
  }

  async get(awid) {
    return await super.findOne({ awid, id });
  }

  async getCurrent() {
    return await super.aggregate([
      { $sort: { timestamp: -1 } },
      {
        $group: {
          _id: "current",
          first: { $first: "$$ROOT" }
        }
      },
    ]);
  }

  async delete(awid, gatewayId) {
    return await super.deleteMany({ "gatewayId": gatewayId });
  }

  async list(awid, gatewayName) {
    let filter = { awid };
    gatewayName && (filter.gatewayName = gatewayName);
    return await super.find(filter)
  }

  async dayList(gatewayId, startTime, graphType) {
    let gateway = gatewayId
    let current = await super.aggregate([
      { $sort: { timestamp: -1 } },
      {
        $group: {
          _id: "current",
          first: { $first: "$$ROOT" }
        }
      },
    ]);
    startTime = new Date(startTime)
    let list = await super.aggregate([
      {
        $match:
        {
          $and: [
            { timestamp: { $gte: startTime } },
            { gatewayId: gateway },
          ]
        }
      },
      {
        $group: {
          _id: {
            $cond: {
              if: { $eq: [graphType, 'last 24h'] },
              then: {
                "year": { $year: "$timestamp" },
                "month": { $month: "$timestamp" },
                "day": { $dayOfMonth: "$timestamp" },
                "hour": { $hour: "$timestamp" },
              },
              else: {
                "year": { $year: "$timestamp" },
                "month": { $month: "$timestamp" },
                "day": { $dayOfMonth: "$timestamp" },
              }
            }
          },
          "temperature": { "$avg": "$temperature" },
          "humidity": { "$avg": "$humidity" }
        }

      },
      { $sort: { _id: 1 } },
    ])
    let output = [{
      current: current,
      list: list
    }]
    return output;
  }

}



module.exports = DataMongo;
