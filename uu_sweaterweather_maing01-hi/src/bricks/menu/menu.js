//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Config from "../config/config";
import DataListStateResolver from "../common/resolver/data-list-state-resolver";
import GatewayContext from "../manage-gateways/gateway-context/gateway-context"
import MenuView from "../menu/menu-view";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Menu",
  //@@viewOff:statics
};

export const Menu = createVisualComponent({
  ...STATICS,

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

  render() {

    let dataGatewayList = useContext(GatewayContext);
    let dataList = dataGatewayList?.data;
    
    //@@viewOn:render
    return  (
      <DataListStateResolver dataList={dataGatewayList}>
      <MenuView dataList={dataList} />
     </DataListStateResolver>
    ) 
    //@@viewOff:render
  },
});

export default Menu;
