//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext, useState, useLsiValues } from "uu5g04-hooks";
import Config from "./config/config";
import DataListStateResolver from "../common/resolver/data-list-state-resolver";
import GatewayContext from "./gateway-context/gateway-context"
import Css from "./gateway.css";
import AddGatewayForm from "./add-gateway-form";
import UpdateGatewayForm from "./update-gateway-form";
import DataContext from "../menu/data-context/data-context"
import Lsi from "./manage-gateway-lsi";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGateway",
  //@@viewOff:statics
};

export const ManageGateway = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:hooks
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showGateway, setShowGateway] = useState('');
    const inputLsi = useLsiValues(Lsi);
    let dataGatewayList = useContext(GatewayContext);
    let dataList = useContext(DataContext)
    //@@viewOff:hooks

    //@@viewOn:handlers
    function handleAddGatewayForm() {
      setShowCreateModal(true)
    }

    function handleCloseAddGatewayForm() {
      setShowCreateModal(false);
    }

    async function handleAddGatewaySave(opt) {
      console.log("opt", opt);
      const input = {
        gatewayName: opt.values.gatewayName,
        location: opt.values.location
      }
      try {
        await dataGatewayList?.handlerMap.create(input);
      } catch {
        "Will work later on error create"
        return;
      }
      setShowCreateModal(false);
    }

    function handleUpdateGatewayForm(value) {
      setShowUpdateModal(true)
      setShowGateway(value)
    }

    function handleCloseUpdateGatewayForm() {
      setShowUpdateModal(false);
    }

    async function handleUpdateGatewaySave(opt) {
      console.log("opt", opt);
      const input = {
        id: showGateway.id,
        gatewayName: opt.values.gatewayName,
        location: opt.values.location,
        state: opt.values.state
      }
      console.log("NewData", input);
      try {
        await dataGatewayList?.handlerMap.update(input);
      } catch (e) {
        "Will work later on error of  update";
        return;
      }
      setShowUpdateModal(false);
    }

    async function handleDeleteGateway(value) {
      try {
        await dataList?.handlerMap.delete({ gatewayId: value.id });
      } catch (e) {
        "Will work later on error of  delete";
        return;
      }
      try {
        await dataGatewayList?.handlerMap.delete({ id: value.id });
      } catch (e) {
        "Will work later on error of  delete";
        return;
      }
    }
    //@@viewOff:handlers

    //@@viewOn:render
    return (
      <DataListStateResolver dataList={dataGatewayList}>
        <AddGatewayForm
          shown={showCreateModal}
          onSave={handleAddGatewaySave}
          onCancel={handleCloseAddGatewayForm}
        />
        <UpdateGatewayForm
          shown={showUpdateModal}
          gateway={showGateway}
          onSave={handleUpdateGatewaySave}
          onCancel={handleCloseUpdateGatewayForm}
        />
        <div className={Css.gateway()} >
          <UU5.Bricks.Card
            style={{ backgroundColor: "rgba(228,223,220, 0.5)" }}
            bgStyle="transparent"
            elevation={3}
            width={150}
            borderRadius="8px"
          >
            <div className={Css.add()}
              onClick={handleAddGatewayForm}>
              <UU5.BlockLayout.Text
                style={{ color: "#454754" }}
                icon="mdi-shape-rectangle-plus" />
            </div>
          </UU5.Bricks.Card>

          {dataGatewayList?.data?.map(value => {
            let state = Config.gatewayStateList.find(item => item.code === value.data.state)
            return (
              <>
                <UU5.Bricks.Card
                  className={Css.gatewayStyle()}
                  bgStyle="outline"
                  elevation={3}
                  width={350}
                  borderRadius="8px"
                >
                  <UU5.Bricks.Span className={Css.state()}>
                    <UuP.Bricks.State
                      stateType={state?.type}
                      stateName={state?.code}
                      type="button"
                    />
                  </UU5.Bricks.Span>
                  <UU5.BlockLayout.Row >
                    <UU5.BlockLayout.Text
                      style={{ fontSize: "30px", fontFamily: 'Brush Script MT', color: "#454754" }}
                      weight="primary"
                    > {value.data.gatewayName}</UU5.BlockLayout.Text>
                  </UU5.BlockLayout.Row>
                  <UU5.BlockLayout.Row>
                    <UU5.Bricks.Link>
                      <UU5.BlockLayout.Text
                        style={{ color: "#454754" }}
                        icon="mdi-map-marker" weight="primary">{inputLsi.location}
                  </UU5.BlockLayout.Text>
                    </UU5.Bricks.Link><UU5.BlockLayout.Text
                      style={{ color: "#454754" }} weight="secondary">
                      {" " + value.data.location}
                    </UU5.BlockLayout.Text>
                  </UU5.BlockLayout.Row>
                  <UU5.BlockLayout.Row>
                    <UU5.BlockLayout.Text
                      style={{ color: "#454754" }}
                      weight="primary">Id:
                     </UU5.BlockLayout.Text>
                    <UU5.BlockLayout.Text
                      style={{ color: "#454754" }}>
                      {" " + value.data.id}
                    </UU5.BlockLayout.Text>
                  </UU5.BlockLayout.Row>
                  <div className={Css.iconSection()}>
                    {value.data.state === 'closed' &&
                      (<div style={{ color: "#C34A36" }}
                        onClick={() => handleDeleteGateway(value.data)}>
                        <UU5.Bricks.Icon
                          className={Css.icon()}
                          icon="glyphicon-trash"
                          bgStyle="transparent"
                          borderRadius="8px"
                        /></div>)}
                    <div style={{ color: "#454754" }}
                      onClick={() => handleUpdateGatewayForm(value.data)}>
                      <UU5.Bricks.Icon
                        className={Css.icon()}
                        icon="glyphicon-edit"
                        bgStyle="transparent"
                        colorSchema="green"
                        borderRadius="8px"
                      /></div></div>
                </UU5.Bricks.Card>
              </>
            )
          })}

        </div>
      </DataListStateResolver>
    )
    //@@viewOff:render
  },
});

export default ManageGateway;
