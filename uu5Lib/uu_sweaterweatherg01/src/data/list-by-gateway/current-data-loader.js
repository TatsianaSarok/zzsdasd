//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:imports

const CurrentDataLoader = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "CurrentDataLoader",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string,
    gatewayId: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined,
    gatewayId: undefined
  },
  //@@viewOff:defaultProps

  render({ children, baseUri, gatewayId }) {

    //@@viewOn:hooks
    let currentDataObject = useDataObject({
      handlerMap: {
        load: handleLoad,
      }
    });
    let { state, data, newData, pendingData, errorData, handlerMap } = currentDataObject;
    //@@viewOff:hooks

    const gateway = {
      gatewayId: gatewayId
    }

    async function handleLoad() {
      return await Calls.getCurrent({ baseUri, gateway })
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

export default CurrentDataLoader;