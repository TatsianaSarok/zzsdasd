// //@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import DataProvider from "./data-provider";
import Graph from "./graph";



//@@viewOff:imports 

const GatewayGraph = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayGraph",
  //@@viewOff:statics
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
  render({ gatewayName, baseUri, startTime, graphType }) {
    console.log("All",gatewayName, baseUri,startTime, graphType );
    
    //@@viewOn:private
    //@@viewOff:private
    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(data) {
      console.log("gatewayNames", data);
      return (  
        <>
          <Graph data={data}/>
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

    return (
      <UU5.Bricks.Container>
        <DataProvider baseUri={baseUri} gatewayName={gatewayName} startTime={startTime} graphType={graphType} >
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
        </DataProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  }
});

export default GatewayGraph;

//@@viewOn:imports
