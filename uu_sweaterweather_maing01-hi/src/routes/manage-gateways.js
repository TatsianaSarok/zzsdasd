// //@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import ManageGateway from "../bricks/manage-gateways/manage-gateways"


//@@viewOff:imports 

const ManageGateways = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGateways",
  //@@viewOff:statics

  render() {

    //@@viewOn:hooks
    //@viewOff:hooks

    //@@viewOn:private
  
    return (
      <ManageGateway/>
    );
    //@@viewOff:render
  }
}); 

export default ManageGateways;

//@@viewOn:imports
