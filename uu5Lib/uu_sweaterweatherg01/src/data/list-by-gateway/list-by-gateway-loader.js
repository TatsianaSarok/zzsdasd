//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataList } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";
import Config from "./config/config";
import Calls from "calls";
import { DataContext } from "./../context/data-context";
//@@viewOff:imports

export const ListByGatewayLoader = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ListByGatewayLoader",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string,
    gatewayId: UU5.PropTypes.string,
    graphType: UU5.PropTypes.string,
    startTime: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined,
    gatewayId: undefined,
    graphType: undefined,
    startTime: undefined
  },
  //@@viewOff:defaultProps

  render(props) {

    const dataDataList = useDataList({
      handlerMap: {
        load: Calls.dayList,
      },
      initialDtoIn: getInitLoadDtoIn(props.baseUri, props.gatewayId, props.startTime, props.graphType)
    });

    //@@viewOn:render
    return <DataContext.Provider value={dataDataList}>{props.children}</DataContext.Provider>;
    //@@viewOff:render
  },
});

function getInitLoadDtoIn(baseUri, gatewayId, startTime, graphType) {
  let dtoIn = {};
  if (baseUri) {
    dtoIn.baseUri = baseUri;
    dtoIn.data = {
      gatewayId,
      startTime,
      graphType
    }
  }
  return dtoIn;
}
//@@viewOn:helpers
//@@viewOff:helpers

export default ListByGatewayLoader;
