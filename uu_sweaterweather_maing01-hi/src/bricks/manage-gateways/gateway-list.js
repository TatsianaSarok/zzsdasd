//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-bricks";
import "uu5g04-forms";
import Css from "./gateway.css";
import AddGatewayForm from "./add-gateway-form";
import UpdateGatewayForm from "./update-gateway-form";
//@@viewOff:imports

const GatewayList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
    onAddGateway: UU5.PropTypes.func,
    onDeleteGateway: UU5.PropTypes.func,
    shown: UU5.PropTypes.bool,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => { },
    onCancel: () => { },
    onAddGateway: () => { },
    onDeleteGateway: () => { },
    shown: false,
  },
  //@@viewOff:defaultProps

  render({ data, onAddGateway, onDeleteGateway, onUpdateGateway }) {
    console.log("onAdd", data);
    //@@viewOn:hooks
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showGateway, setShowGateway] = useState('');
    //@@viewOff:hooks

    //@@viewOn:private    
    //@@viewOff:private

    //@@viewOn:interface

    //@@viewOn:interface

    //@@viewOn:handlers
    function handleAddGatewayForm() {
      setShowCreateModal(true)
    }

    function handleCloseAddGatewayForm() {
      setShowCreateModal(false);
    }

    function handleAddGatewaySave(opt) {
      console.log("opt", opt);
      const input = {
        gatewayName: opt.values.gatewayName,
        location: opt.values.location
      }
      onAddGateway(input)
      setShowCreateModal(false);
    }
    function handleUpdateGatewayForm(value) {
      setShowUpdateModal(true)
      setShowGateway(value)
    }

    function handleCloseUpdateGatewayForm() {
      setShowUpdateModal(false);
    }

    function handleUpdateGatewaySave(opt) {
      console.log("opt", opt);
      const input = {
        id: showGateway.id,
        gatewayName: opt.values.gatewayName,
        location: opt.values.location
      }
      onUpdateGateway(input)
      setShowUpdateModal(false);
    }

    function handleDeleteGateway(item) {
      onDeleteGateway({ id: item });
      console.log("item", item)
    }
    //@@viewOff:handlers

    //@@viewOn:render
    return (
      <>
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

          {data.map(value => {
            return (
              <>
                <UU5.Bricks.Card
                  className={Css.gatewayStyle()}
                  bgStyle="transparent"
                  colorSchema="blue"
                  width={350}
                  bgStyle="filled">

                  <UU5.Bricks.Button size="s"
                    onClick={() => handleDeleteGateway(value.data.id)}
                    bgStyle="transparent">
                    <UU5.Bricks.Icon icon="glyphicon-trash" />
                  </UU5.Bricks.Button>
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
                </UU5.Bricks.Card>
              </>
            )
          })}

        </div>
      </>
    );
    //@@viewOff:render
  },
});

export default GatewayList;
