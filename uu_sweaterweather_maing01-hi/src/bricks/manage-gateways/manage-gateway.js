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
        await dataList?.handlerMap.delete({gatewayName:value.gatewayName});
      } catch (e) {
        "Will work later on error of  delete";
        return;
      }
      try {
        await dataGatewayList?.handlerMap.delete({id: value.id});
      } catch (e) {
        "Will work later on error of  delete";
        return;
      }
    }
    //@@viewOff:handlers

    //@@viewOn:render
    return (
      <UuP.Bricks.ComponentWrapper
        colorSchema={props.colorSchema}
        elevation={props.elevation}
        borderRadius={props.borderRadius}
        cardView={props.cardView}
      >
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
              colorSchema="grey"
              width={100}>
              <div className={Css.icon()}>
                <UU5.Bricks.Button
                  onClick={handleAddGatewayForm}
                  bgStyle="transparent" size="xl">
                  <UU5.Bricks.Icon icon="mdi-plus-circle" />
                </UU5.Bricks.Button>
              </div>
            </UU5.Bricks.Card>

            {dataGatewayList?.data?.map(value => {
                let state = Config.gatewayStateList.find(item => item.code === value.data.state)
              
    
              return (
                <>
                  <UU5.Bricks.Card
                    className={Css.gatewayStyle()}
                    bgStyle="transparent"
                    colorSchema="blue"
                    width={350}
                    bgStyle="filled">
                 
                 { value.data.state === 'closed'&& 
                  ( <UU5.Bricks.Button size="s"
                      onClick={() => handleDeleteGateway(value.data)}
                      bgStyle="transparent">
                      <UU5.Bricks.Icon icon="glyphicon-trash" />
                    </UU5.Bricks.Button>)}
                     <UU5.Bricks.Button
                      onClick={() => handleUpdateGatewayForm(value.data)}
                      bgStyle="transparent"
                      colorSchema="blue"
                      size="m"
                      content={<UU5.Bricks.Icon icon="glyphicon-edit" />}
                    ></UU5.Bricks.Button>
                    <UU5.Bricks.Text colorSchema="grey" >Gateway name: {value.data.gatewayName}</UU5.Bricks.Text>
                    <UU5.Bricks.Text colorSchema="black" >Gateway location: {value.data.location}</UU5.Bricks.Text>
                    <UU5.Bricks.Text colorSchema="grey" >Gateway id: {value.data.id}</UU5.Bricks.Text>
                    <UU5.Bricks.Span className={Css.state()}>
              <UuP.Bricks.State
                    stateType={state?.type}
                    stateName={state?.code} 
                 type="button"
              />
            </UU5.Bricks.Span>
                  </UU5.Bricks.Card>
                </>
              )
            })}

          </div>
        </DataListStateResolver>
      </UuP.Bricks.ComponentWrapper>
    )
    //@@viewOff:render
  },
});

export default ManageGateway;
