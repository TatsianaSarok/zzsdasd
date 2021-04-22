// //@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import * as UuSweaterweather from "uu_sweaterweatherg01";


//@@viewOff:imports 

const GatewayGraph = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayGraph",
  //@@viewOff:statics

  render() {

    //@@viewOn:hooks
    //@viewOff:hooks

    //@@viewOn:private
  
    return (
      <UuSweaterweather.Core.ManageGateways.Gateways/>
    );
    //@@viewOff:render
  }
}); 

export default GatewayGraph;

//@@viewOn:imports
