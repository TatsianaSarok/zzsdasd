//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent } from "uu5g04-hooks";
import CurrentDataView from "./list/current-data-view";
import Config from "../config/config";
import CurrentDataLoader from "./current-data-loader"
//@@viewOff:imports

const CurrentData = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "CurrentData",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string,
    gatewayId: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined,
    gatewayId: undefined
  },
  //@@viewOff:defaultProps

  render({ baseUri, gatewayId }) {

    //@@viewOff:handlers
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(currentData) {
      return (
        <>
          <CurrentDataView
            currentData={currentData}
          />
        </>
      );
    }

    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return <UU5.Bricks.Error content="No records for this period of time!" error={errorData.error} errorData={errorData.data} />;
      }
    }
    //@@viewOn:render

    return (
      <CurrentDataLoader baseUri={baseUri} gatewayId={gatewayId}>
        {({ state, currentData, errorData }) => {

          switch (state) {
            case "pending":
            case "pendingNoData":
              return renderLoad();
            case "error":
            case "errorNoData":
              return renderError(errorData);
            case "itemPending":
            case "ready":
            case "readyNoData":
            default:
              return renderReady(currentData);
          }
        }}
      </CurrentDataLoader>
    );
    //@@viewOff:render
  },
});

export default CurrentData;