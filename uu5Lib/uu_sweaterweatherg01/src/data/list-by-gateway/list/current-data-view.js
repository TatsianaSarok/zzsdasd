//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "../config/config";
//@@viewOff:imports

const CurrentData = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "CurrentData",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    currentData: UU5.PropTypes.object
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    currentData: {}
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    console.log();
    const [temperature, setTemperature] = useState(props?.currentData.temperature)
    //@@viewOff:hooks

    useEffect(() => {
      setTimeout(
        () => setTemperature(props?.currentData.temperature),
        5000
      )
    });

    //@@viewOn:render
    return (
      <div style={{ float: "right", margin: "10px 15px 0px 0px" }}>

        <UU5.Bricks.Icon icon="mdi-weather-sunny"
          style={{ fontFamily: 'Brush Script MT', fontSize: "40px", marginRight: "20px", color: "#ffba08" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "black"
            }}>
            {temperature}&#8451;
              </UU5.Bricks.Text>
        </UU5.Bricks.Icon>

        <UU5.Bricks.Icon icon="mdi-meteor"
          style={{ fontSize: "40px", color: "#3297C3" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "black"
            }}>
            {props?.currentData.humidity}%
          </UU5.Bricks.Text>
        </UU5.Bricks.Icon>

        <UU5.Bricks.Icon icon="mdi-lightbulb-outline"
          style={{ fontSize: "40px", color: "#ffba08" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "black"
            }}>
            {props?.currentData.light}
          </UU5.Bricks.Text>
        </UU5.Bricks.Icon>

      </div>
    );
    //@@viewOff:render
  }
});

export default CurrentData;

