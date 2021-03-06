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
    gatewayId: UU5.PropTypes.string,
    state: UU5.PropTypes.string,
    location: UU5.PropTypes.object,
    gatewayName: UU5.PropTypes.object,
    state: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined,
    gatewayId: undefined,
    state: undefined,
    location: {},
    gatewayName: {},
    state: UU5.PropTypes.string
  },
  //@@viewOff:defaultProps

  render({ baseUri, gatewayId, gatewayName, location, state }) {
    //@@viewOff:handlers
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }
    function renderReady(data) {
      return (
        <>
          <CurrentDataView
            state={state}
            location={location}
            currentData={data}
            baseUri={baseUri}
            gatewayId={gatewayId}
            gatewayName={gatewayName}
          />
        </>
      );
    }

    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return null;
      }
    }
    //@@viewOn:render

    return (
      <CurrentDataLoader baseUri={baseUri} gatewayId={gatewayId}>
        {({ state, data, errorData }) => {

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
              return renderReady(data);
          }
        }}
      </CurrentDataLoader>
    );
    //@@viewOff:render
  },
});

export default CurrentData;