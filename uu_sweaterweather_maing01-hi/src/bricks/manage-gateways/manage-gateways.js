//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import GatewayProvider from "./gateway-provider";
import GatewayList from "./gateway-list"
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGateways",
  //@@viewOff:statics
};

export const ManageGateways = createVisualComponent({
  ...STATICS,

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
    console.log("props",props.baseUri);
    const createRef = useRef();
    const deleteRef = useRef();
    const updateRef = useRef();
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    function showError(content) {
      UU5.Environment.getPage().getAlertBus().addAlert({
        content,
        colorSchema: "red",
      });
    }
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }
    async function handleAddGateway(data) {
      console.log("inputGate", data);
      try {
        await createRef.current(data);
        //return handleHome()
      } catch {
        showError(`Create of  failed!`);
      }
    }

    async function handleDeleteGateway(data) {
      console.log("dataid", data);
      try {
        await deleteRef.current(data);
      } catch {
        showError(`Deletion failed!`);
      }
    }

    async function handleUpdateGateway(data) {
      try {
        await updateRef.current(data);
      } catch {
        showError(`Create  failed!`);
      }
    }

    function renderReady(data) {
      console.log("DAta", data);
      return (
        <>
          <GatewayList
          data={data} 
          onAddGateway={handleAddGateway}
          onDeleteGateway={handleDeleteGateway}
          onUpdateGateway={handleUpdateGateway}
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

    return  (
      <UU5.Bricks.Container>
      <GatewayProvider >
        {({ state, data, errorData, handlerMap }) => {
        createRef.current = handlerMap.create;
        deleteRef.current = handlerMap.delete;
        updateRef.current = handlerMap.update;

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
        
      </GatewayProvider>
    </UU5.Bricks.Container>
    ) 
    //@@viewOff:render
  },
});

export default ManageGateways;
