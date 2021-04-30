// //@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import * as UuSweaterweather from "uu_sweaterweatherg01";


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
      <UuSweaterweather.Bricks.ManageGateways/>
    );
    //@@viewOff:render
  }
}); 

export default ManageGateways;

//@@viewOn:imports
