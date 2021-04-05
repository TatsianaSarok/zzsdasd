//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import DataList from "../bricks/data-list";
import DataProvider from "../bricks/data-provider";
//@@viewOff:imports

const Data = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Data",
  //@@viewOff:statics

  render() {
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

    function renderReady(data) {
      return (
        <>
          {/* <DataCreate onCreate={handleCreateData} /> */}
          <DataList data={data} />
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
        <DataProvider>
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
        </DataProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  }
});

export default Data;