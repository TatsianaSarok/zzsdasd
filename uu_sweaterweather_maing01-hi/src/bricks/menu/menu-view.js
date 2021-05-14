//@@viewOn:imports
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../config/config";
import Css from "../sweaterweather.css";
import Graph from "./graph";
//@@viewOff:imports

const MenuView = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "MenuView",
    //@@viewOff:statics

    render(props) {
        //@@viewOn:hooks
        const [gatewayId, setGatewayId] = useState(props?.dataList[0].data.id)
        const [gatewayName, setGatewayName] = useState("")
        //@@viewOff:hooks
        console.log("propppp", props);
        let suspendedState = props?.dataList?.some(item => {
            return item.data.gatewayName === gatewayName && item.data.state === 'suspended'
        })
        let activeState = props?.dataList?.filter(value => {
            return value.data.state !== 'closed' && value.data.state !== 'initial'

        })

        //@@viewOn:handlers
        function handleName(value) {
            value?setGatewayName(value): setGatewayName("")
 }

        //@@viewOff:handlers
        //@@viewOn:render
        return (
            <div  className={Css.tagSelect()}>
                <UU5.Forms.TagSelect
                    size="l"
                    borderRadius={5}
                    allowCustomTags={false}
                    availableTags={activeState.map(value => {
                        if (value.data.state !== 'closed' && value.data.state !== 'initial') {
                            return ({ "content": value.data['gatewayName'], "value": value.data['id'] })
                        }
                    })}
                    colorSchema="black"
                    elevation={5}
                    value={gatewayName}
                    multiple
                    onChange={({ value }) => { handleName(value) }}
                />
            <Graph gatewayName={gatewayName}  />

            </div>
        )
        //@@viewOff:render
    }
});

export default MenuView;
