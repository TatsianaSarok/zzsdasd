// //@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import DataProvider from "./data-provider";
import Graph from "./graph";
import CurrentMeasurement from "./current-measurement";



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
  render(props) {
  
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
        <CurrentMeasurement data={data} />
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
        <DataProvider baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/" gatewayName={props.gatewayName} startTime={props.startTime} graphType={props.graphType} >
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
