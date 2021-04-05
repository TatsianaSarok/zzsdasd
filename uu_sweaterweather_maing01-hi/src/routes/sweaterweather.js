//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//import SweaterweatherList from "../bricks/sweaterweather-list";
import DataList from "../bricks/data-list";
import SweaterweatherMainContext from "../bricks/sweaterweather-main-context";
//import SweaterweatherCreate from "../bricks/sweaterweather-create";
//@@viewOff:imports

const Sweaterweather = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Sweaterweather",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      // <div>Hello there </div>
      <DataList/>
    );
    //@@viewOff:render
  }
});

export default Sweaterweather;