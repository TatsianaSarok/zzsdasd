//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Config from "../config/config";
import DataContext from "../bricks/menu/data-context/data-context";


//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CurrentMeasurementView",
  //@@viewOff:statics
};

export const CurrentMeasurementView = createVisualComponent({
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

  render(props) {
    
    let dataGatewayList = useContext(DataContext);
    let currentValue = dataGatewayList.data[0].first;
console.log("nuuu",props);

    //@@viewOn:render
    return  (
<>
    <UU5.Bricks.Text>Temperature: {currentValue.temperature }C&#176;</UU5.Bricks.Text>
    <UU5.Bricks.Text>Humidity: {currentValue.humidity }%</UU5.Bricks.Text>

</>
    ) 
    //@@viewOff:render
  },
});

export default CurrentMeasurementView;
