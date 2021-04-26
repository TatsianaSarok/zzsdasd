// //@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import DataList from "./data-list";
import DataProvider from "./data-provider";


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
  render({gatewayName}) {
   // console.log(gatewayName);
    console.log("props data",gatewayName);
    //@@viewOn:hooks
    //@viewOff:hooks

    //@@viewOn:private
    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }

    // async function handleCreateData(data) {
    //   try {
    //     await createDataRef.current(data);
    //   } catch {
    //     showError(`Creation of ${data.name} failed!`);
    //   }
    // }

    // /* eslint no-unused-vars: "off" */
    // async function handleUpdateData(data, values) {
    //   try {
    //     await updateDataRef.current({ id: data.id, ...values });
    //   } catch {
    //     showError(`Update of ${data.name} failed!`);
    //   }
    // }

    // async function handleDeleteData(data) {
    //   try {
    //     await deleteDataRef.current({ id: data.id });
    //   } catch {
    //     showError(`Deletion of ${data.name} failed!`);
    //   }
    // }
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(gatewayName) {
      console.log("gatewayNames",gatewayName);
      
      return (
        <>
          <DataList  gatewayName={gatewayName}/>
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
let startTime = new Date(Date.now() - 86400 * 1000).toISOString()
console.log("startTime", startTime);
    return (
      <UU5.Bricks.Container>
        <DataProvider  baseUri="https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162" gatewayName={gatewayName} startTime={startTime} >
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
