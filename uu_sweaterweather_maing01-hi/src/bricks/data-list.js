//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import './data-list.css'
import GraphWeek from "./graph-week";
import Graph24h from "./graph-24h";
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
    let currentData = gatewayName.itemList.sort((a, b) => {
      return a.timestamp - b.timestamp
    });

    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface

    //@@viewOn:interface

    //@@viewOn:handlers
    function DisplayGraph() {
      return graphType === "last 24h" ?
        <Graph24h data={gatewayName.itemList} /> :
        graphType === "week" ?
          <GraphWeek gatewayName={gatewayName} /> : <div>graph for monthly data</div>
    }
    //@@viewOff:handlers
    //@@viewOn:render
    return (
      <div>
        <UU5.Bricks.Text > temperature{currentData[0].temperature}</UU5.Bricks.Text>
        <UU5.Bricks.Text > humidity</UU5.Bricks.Text>
        <UU5.Bricks.ProgressBar progress={currentData[0].humidity} striped />
        <UU5.Forms.SwitchSelector
          colorSchema="blue"
          items={graphName.map(value => ({ value }))}
          onChange={({ value }) => { setGraphType(value) }}
          value={graphType}
        />
          <DisplayGraph />
      </div>
    );
    //@@viewOff:render
  },
});

export default DataList;
