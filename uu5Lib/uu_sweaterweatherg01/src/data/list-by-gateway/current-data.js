

//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent} from "uu5g04-hooks";
import CurrentDataView from "./list/current-data-view";
import Config from "../config/config";
import CurrentDataLoader from "./current-data-loader"


// //@@viewOff:imports

const CurrentData = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "CurrentData",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {

    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {

    },
    //@@viewOff:defaultProps

    render({baseUri, gatewayId}) {
        //@@viewOn:hooks
console.log("gatewayId", baseUri, gatewayId);
        //@@viewOff:handlers
          function renderLoad() {
            return <UU5.Bricks.Loading />;
          }
          function renderReady(data) {
            return (
              <>
                <CurrentDataView
                  currentData={data}
                />
              </>
            );
          }
      
          function renderError(errorData) {
            switch (errorData.operation) {
              case "load":
              case "loadNext":
              default:
                return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data} />;
            }
          }
        //@@viewOn:render
        return (
            <CurrentDataLoader baseUri={baseUri} gatewayId={gatewayId}>
            {({ state, data, errorData, pendingData, handlerMap }) => {
         
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