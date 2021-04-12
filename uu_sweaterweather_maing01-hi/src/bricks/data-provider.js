
//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:impor<<<<

const DataProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataProvider",
  //@@viewOff:statics

  render({ children, gatewayName }) {
    console.log(gatewayName);
    let objectDataValues = useDataObject({
      initialDtoIn: {gatewayName: gatewayName},
      handlerMap: {
        load: Calls.listData,
      },
    });

    let { state, data, pendingData, errorData, handlerMap } = objectDataValues;
      console.log(data);
      console.log("Data in provider");

    //@@viewOn:render
    return children({
      state,
      data,
      pendingData,
      errorData,
      handlerMap,
      // handlerMap2,
    });
    //@@viewOff:render
  },
});

export default DataProvider;
