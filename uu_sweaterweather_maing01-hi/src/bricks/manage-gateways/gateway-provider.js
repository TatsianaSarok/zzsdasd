//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:imports

const GatewayProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayProvider",
  //@@viewOff:statics
  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined
  },
  //@@viewOff:defaultProps
  render({ children }) {
    //@@viewOn:hooks
    let listDataValues = useDataList({
      pageSize: 200,
      handlerMap: {
        load: handleLoadGatewayList,
        create: handleCreateGateway,
        delete: handleDeleteGateway,
        update: handleUpdateGateway
      }

    });

    let { state, data, newData, pendingData, errorData, handlerMap } = listDataValues;
    //@@viewOff:hooks
    async function handleLoadGatewayList() {
      return await Calls.listGateway()
    }
    async function handleCreateGateway(dtoIn) {
      return await Calls.createGateway( dtoIn)
    }
    async function handleDeleteGateway(dtoIn) {
      console.log("dtoInProvid", dtoIn);
      return await Calls.deleteGateway( dtoIn)
    }
    async function handleUpdateGateway(dtoIn) {
      const dtoOut = await Calls.updateGateway( dtoIn)
      console.log("dtoIn",dtoIn);
      console.log("dtoOut",dtoOut);
      return await Calls.updateGateway( dtoIn);
    }
    //@@viewOn:render
    return children({
      state,
      data,
      newData,
      pendingData,
      errorData,
      handlerMap
    });
    //@@viewOff:render
  }
});

export default GatewayProvider;