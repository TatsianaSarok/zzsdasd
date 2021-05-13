//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext, useState } from "uu5g04-hooks";
import Config from "./config/config";
import DataListStateResolver from "../common/resolver/data-list-state-resolver";
import GatewayContext from "./gateway-context/gateway-context"
import Css from "./gateway.css";
import AddGatewayForm from "./add-gateway-form";
import UpdateGatewayForm from "./update-gateway-form";
import DataContext from "../menu/data-context/data-context"
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGateway",
  //@@viewOff:statics
};

export const ManageGateway = createVisualComponent({
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
    //@@viewOn:hooks
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showGateway, setShowGateway] = useState('');
    //@@viewOff:hooks
    let dataGatewayList = useContext(GatewayContext);
    let dataList = useContext(DataContext)
    console.log("dataCony", dataList);
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
      console.log("NewData", input);
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
      console.log("Va", value);
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
            bgStyle="outline"
            colorSchema="grey"
            width={150}>

            <div className={Css.add()}
              onClick={handleAddGatewayForm}>
              <UU5.BlockLayout.Text
                colorSchema="black"

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
                  colorSchema="back"
                  width={350}

                //  bgStyle="filled"
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
                      style={{ fontSize: "30px", fontFamily: 'Brush Script MT' }}
                      weight="primary"
                      colorSchema="black"
                    > {value.data.gatewayName}</UU5.BlockLayout.Text>
                  </UU5.BlockLayout.Row>
                  <UU5.BlockLayout.Row>
                    <UU5.Bricks.Link>
                      <UU5.BlockLayout.Text colorSchema="black" icon="mdi-map-marker" weight="primary">
                        Location
                  </UU5.BlockLayout.Text>
                    </UU5.Bricks.Link> <UU5.BlockLayout.Text colorSchema="black" weight="secondary">{value.data.location}</UU5.BlockLayout.Text>
                  </UU5.BlockLayout.Row>
                  <UU5.BlockLayout.Row>
                    <UU5.BlockLayout.Text colorSchema="black" weight="primary">Id:</UU5.BlockLayout.Text>
                    <UU5.BlockLayout.Text> {value.data.id} </UU5.BlockLayout.Text>
                  </UU5.BlockLayout.Row>
                  <div className={Css.iconSection()}>
                    {value.data.state === 'closed' &&
                      (<div onClick={() => handleDeleteGateway(value.data)}>
                        <UU5.Bricks.Icon
                          className={Css.icon()}
                          icon="glyphicon-trash"
                          bgStyle="transparent"
                          colorSchema="red"
                          borderRadius="8px"
                        /></div>)}
                    <div onClick={() => handleUpdateGatewayForm(value.data)}>
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
