//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import Calls from "calls";
import Config from "../config/config";
import GatewayContext from "./gateway-context";
//@@viewOff:imports

const GatewayProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    const state = useDataList({
      pageSize: 200,
      handlerMap: {
        load: handleLoadGatewayList,
        create: handleCreateGateway,
        delete: handleDeleteGateway,
        update: handleUpdateGateway
      },
    });
    //@@viewOff:hooks

    //@@viewOn:render
    return <GatewayContext.Provider value={state}>{children}</GatewayContext.Provider>;
    //@@viewOff:render
    async function handleLoadGatewayList(dtoIn) {
      return await Calls.listGateway(dtoIn)
    }
    async function handleCreateGateway(dtoIn) {
      return await Calls.createGateway(dtoIn)
    }
    async function handleDeleteGateway(dtoIn) {
      console.log("dtoInProvid", dtoIn);
      return await Calls.deleteGateway(dtoIn)
    }
    async function handleUpdateGateway(dtoIn) {
      const dtoOut = await Calls.updateGateway(dtoIn)
      console.log("dtoIn", dtoIn);
      console.log("dtoOut", dtoOut);
      return await Calls.updateGateway(dtoIn);
    }
  },
});

export default GatewayProvider;
