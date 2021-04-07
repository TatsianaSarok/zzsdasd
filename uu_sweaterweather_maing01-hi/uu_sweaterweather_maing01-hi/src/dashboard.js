//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5chartg01";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Dashboard",
  //@@viewOff:statics
};

export const Dashboard = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <UU5.Bricks.Container header="LineChart with default properties">
      {/*@@viewOn:0*/}
      <UU5.SimpleChart.LineChart data={[
        { label: "Apple", value: 45 },
        { label: "others", value: 10 },
        { label: "HTC", value: 5 },
        { label: "Samsung", value: 20 },
        { label: "LG", value: 10 },
        { label: "Motorola", value: 10 }
      ]} />
      {/*@@viewOff:0*/}
  </UU5.Bricks.Container>
    ) 
    //@@viewOff:render
  },
});

export default Dashboard;
