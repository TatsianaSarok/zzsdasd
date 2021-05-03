//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import * as UuSweaterweather from "uu_sweaterweatherg01";
import ManageGatewaysButton from "../bricks/manage-gateways-button";
import DateTime from "../bricks/date-time";
import Css from "./sweaterweather.css";
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
        <div className={Css.header()}>
          Sweaterweather
        <UU5.Bricks.Icon icon="mdi-cloud" className={Css.iconSun()} />
        </div>
        <DateTime/>
        <UuSweaterweather.Bricks.Dashboard/>
      </>
    );
    //@@viewOff:render
  }
});

export default Sweaterweather;