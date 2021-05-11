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

  async getCurrent(gateway) {
    let currentData = await super.aggregate([
      {$match: { gatewayId: gateway } },
      { $sort: { "timestamp": -1 } },
      { $limit: 1 },
      { $project: { temperature: 1, humidity: 1 } }
    ])
    return currentData[0]
  }

  async delete(awid, gatewayId) {
    return await super.deleteMany({ "gatewayId": gatewayId });
  }

  async list(awid, gatewayName) {
    let filter = { awid };
    gatewayName && (filter.gatewayName = gatewayName);
    return await super.find(filter)
  }

  async dayList(awid, gatewayId, startTime, graphType) {
    let gateway = gatewayId
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
      {
        $facet: {
          itemList: [
            { $sort: { _id: 1 } },
            { $limit: 200 },
          ],
          pageInfo: [
            { $group: { _id: 200, total: { $sum: 1 } } },
          ]
        }
      }
    ])
    return list[0]
  }
}


module.exports = DataMongo
