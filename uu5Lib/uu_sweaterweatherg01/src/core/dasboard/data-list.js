//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import GraphWeek from "./graph-week";
import Graph24 from "./graph24";
//@@viewOff:imports

const DataList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render({ gatewayName }) {
    //@@viewOn:hooks

    const [graphType, setGraphType] = useState('last 24h')
    //@@viewOff:hooks
    let graphName = ["last 24h", "week", "month"];

    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface

    //@@viewOn:interface

    //@@viewOn:handlers
    function DisplayGraph() {
      return (
        graphType === "last 24h" ?
        /*<Graph24 data={gatewayName?.itemList} />*/ <div>graph for dayly data</div> :
        graphType === "week" ?
          <GraphWeek gatewayName={gatewayName} /> : <div>graph for monthly data</div>
      )}

    //@@viewOff:handlers
    //@@viewOn:render
    return (
      <div>
        {/* <UU5.Bricks.ProgressBar.Item progress={parseInt(currentData[0]?.temperature)} content={currentData[0]?.temperature + '°C'}
          colorSchema="yellow" />
        <UU5.Bricks.Row >
          <UU5.Bricks.Column colWidth="m-4">
            <UU5.Bricks.ProgressBar.Item progress={parseInt(currentData[0]?.humidity)} colorSchema="blue" />
          </UU5.Bricks.Column>
        </UU5.Bricks.Row> */}
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
        <DisplayGraph />
      </div>
    );
    //@@viewOff:render
  },
});

export default DataList;
