// //@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import DataProvider from "./data-provider";
import GraphWeek from "./graph-week";
import Graph24 from "./graph24";


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
  render({ gatewayName, baseUri }) {
    let startTime = new Date(Date.now() - 86400 * 1000).toISOString()
    //@@viewOn:hooks
    const [graphType, setGraphType] = useState('last 24h')
    let graphName = ["last 24h", "week", "month"];
    //@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(gatewayName) {
      console.log("gatewayNames", gatewayName);

      return (
        <>
          <UU5.Bricks.Row >
            <UU5.Bricks.Column colWidth="m-4">
              <UU5.Forms.SwitchSelector
                colorSchema="blue"
                items={graphName?.map(value => ({ value }))}
                onChange={({ value }) => { setGraphType(value) }}
                value={graphType}
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
          {graphType === 'last 24h' ? (<Graph24 data={gatewayName} graphType={graphType} />) :
            graphType === 'week' ? <GraphWeek data={gatewayName} graphType={graphType} /> :
              <div>Graph Month</div>}
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
        <DataProvider baseUri={baseUri} gatewayName={gatewayName} startTime={startTime} >
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
