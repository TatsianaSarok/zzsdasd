//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import * as UuSweaterweather from "uu_sweaterweatherg01";
import ManageGatewaysButton from "../bricks/manage-gateways-button";
//@@viewOff:imports

const Sweaterweather = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Sweaterweather",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    //@viewOff:hooks

    //@@viewOn:render
    return (
      <>
        <ManageGatewaysButton />
        <UuSweaterweather.Core.Dasboard.DashboardPage />

      </>
    );
    //@@viewOff:render
  }
});

export default Sweaterweather;