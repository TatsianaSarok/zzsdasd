//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-bricks";
import "uu5g04-forms";
import Css from "./gateway.css";
import AddGatewayForm from "./add-gateway-form";
//@@viewOff:imports

const GatewayList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
    shown: UU5.PropTypes.bool,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => { },
    onCancel: () => { },
    shown: false,
  },
  //@@viewOff:defaultProps

  render({ data, onAddGateway }) {
    console.log("onAdd", onAddGateway);
    const [showCreateModal, setShowCreateModal] = useState(false);

    //@@viewOn:hooks

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
      console.log("input", input);
     console.log(onAddGateway(input)); 
     onAddGateway(input)
      setShowCreateModal(false);
    }
    //@@viewOff:handlers

    //@@viewOn:render

    if (data.length === 0) {
      return <>
        <UU5.Common.Error content="WTF No data!" />
      </>
    }

    return (
      <>
        <AddGatewayForm
          shown={showCreateModal}
          onSave={handleAddGatewaySave}
          onCancel={handleCloseAddGatewayForm}
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
            return (<UU5.Bricks.Card
              className={Css.gatewayStyle()}
              bgStyle="transparent"
              colorSchema="blue"
              width={350}
              bgStyle="filled" >
              <UU5.Bricks.Text colorSchema="grey" >Gatewat name: {value.data.gatewayName}</UU5.Bricks.Text>
              <UU5.Bricks.Text colorSchema="black" >Gatewat location: {value.data.location}</UU5.Bricks.Text>
              <UU5.Bricks.Text colorSchema="grey" >Gatewat id: {value.data.id}</UU5.Bricks.Text>
            </UU5.Bricks.Card>
            )
          })}

        </div>
      </>
    );
    //@@viewOff:render
  },
});

export default GatewayList;
