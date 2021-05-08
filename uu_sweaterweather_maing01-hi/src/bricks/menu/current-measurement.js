//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Config from "../config/config";
import DataProvider from "./data-context/data-provider";
import DataContext from "./data-context/data-context";
import CurrentMeasurementView from "./current-measurement-view";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CurrentMeasurement",
  //@@viewOff:statics
};

export const CurrentMeasurement = createVisualComponent({
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


    //@@viewOn:render
    return (
      <>
        <DataProvider>
          <DataContext.Consumer>
            {({ state, errorData }) => {
              switch (state) {
                case "pending":
                case "pendingNoData":
                  return <UU5.Bricks.Loading />;
                case "error":
                case "errorNoData":
                  return <UU5.Bricks.Error error={errorData.error} />;
                case "ready":
                case "readyNoData":
                default:
                  return <CurrentMeasurementView {...props} />;
              }
            }}
          </DataContext.Consumer>
        </DataProvider>
      </>
    )
    //@@viewOff:render
  },
});

export default CurrentMeasurement;
