//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g04-hooks";
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
    const state = useDataObject({
      handlerMap: {
        load: Calls.listGateway,
      },
    });
    //@@viewOff:hooks

    //@@viewOn:render
    return <GatewayContext.Provider value={state}>{children}</GatewayContext.Provider>;
    //@@viewOff:render
  },
});

export default GatewayProvider;
