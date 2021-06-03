//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
import Css from "./gateway.css";
//@@viewOff:imports

const UpdateGatewayForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "UpdateGatewayForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    gateway: UU5.PropTypes.object,
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
    shown: UU5.PropTypes.bool,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    gateway: {},
    onSave: () => { },
    onCancel: () => { },
    shown: false,
  },
  //@@viewOff:defaultProps

  render({ shown, onSave, onCancel, gateway }) {

    //@@viewOn:render
    let items = [];
    Config.gatewayStateList.map(state => {
      const isInitial = state.type === "initial";
      !isInitial && items.push({
        value: state.code,
        content: (
          <UuP.Bricks.State
            key={state.code}
            stateName={state.code}
            stateType={state.type}
            color={state.type === ''}
            type={"button"}
          />
        )
      });
    })
    return (
      <UU5.Forms.ContextModal
      className={Css.form()}
        shown={shown}
        size="l"
        header={
          <UU5.Forms.ContextHeader
            content={<UU5.Bricks.Lsi lsi={{ en: "Update gateway", cs: "Přidat bránu" }} style={{color: "#454754"}}/>}
            info={<UU5.Bricks.Lsi lsi={{ cs: "Více informací...", en: "More info..." }} style={{color: "#454754"}}/>}
          />
        }
        footer={
          <UU5.Forms.ContextControls
            buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Update", cs: "Vytvořit" }} /> }}
            buttonCancelProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Cancel", cs: "Zrušit" }} /> }}
          />
        }
      >
        <UU5.Forms.ContextForm onSave={onSave} onCancel={onCancel}>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="s-6" >
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label="Gateway name"
                name="gatewayName"
                value={gateway.gatewayName}
              />
            </UU5.Bricks.Column>
             <UU5.Bricks.Column colWidth="s-6">
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label={<UU5.Bricks.Lsi lsi={{ en: "Link to the map", cs: "Odkaz na mapu" }} />}
                name="href"
                value={gateway.location?.href}
              />
            </UU5.Bricks.Column>
              <UU5.Bricks.Column colWidth="s-6">
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label={<UU5.Bricks.Lsi lsi={{ en: "Coordinates", cs: "Souřadnice" }} />}
                name="сoordinates"
                value={gateway.location?.сoordinates}
              />
            </UU5.Bricks.Column>   
            <UU5.Bricks.Column>
              <UU5.Forms.SwitchSelector
                items={items}
                label="state"
                value={gateway.state}
                name="state" />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Forms.ContextForm>
      </UU5.Forms.ContextModal>
    );
    //@@viewOff:render
  },
});

export default UpdateGatewayForm;
