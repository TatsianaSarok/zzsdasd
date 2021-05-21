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

    //@@viewOn:propTypes
    propTypes: {
        dataList: UU5.PropTypes.array
    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {
        dataList: []
    },

    render(props) {
        //@@viewOn:hooks
        const [gatewayId, setGatewayId] = useState()
        const [gatewayState, setGatewayState] = useState([])
        //@@viewOff:hooks

     console.log("state", gatewayId);
        let activeState = props?.dataList?.filter(value => {
            return value.data.state !== 'closed' && value.data.state !== 'initial'
        })

        //@@viewOn:handlers
        function handleSetId(value) {
             setGatewayId(value)
        }
        //@@viewOff:handlers

        //@@viewOn:render
        return (
            <div className={Css.tagSelect()}>
                <UU5.Forms.TagSelect
                    size="l"
                    borderRadius={5}
                    allowCustomTags={false}
                    availableTags={activeState.map(value => {
                        if (value.data.state !== 'closed' && value.data.state !== 'initial') {
                            return ({ "content": value.data['gatewayName'], "value": value.data['id']+"/"+value.data['state']+"/"+value.data['gatewayName']})
                        }
                    })}
                    colorSchema="black"
                    elevation={5}
                    value={gatewayId}
                    multiple
                    onChange={( {value }) => { handleSetId(value) }}
                />
                  <Graph gatewayId={gatewayId} />  
            </div>
        )
        //@@viewOff:render
    }
});

export default MenuView;
