//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useEffect, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config";
import moment from "moment"
import Lsi from "../list-by-gateway-lsi"
import Css from "../data.css"
import FlipClock from 'x-react-flipclock'
//@@viewOff:imports

const DateTime = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "DateTime",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {},
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {},
    //@@viewOff:defaultProps

    render(props) {
        //@@viewOn:hooks
        const [day, setDay] = useState("");
        const inputLsi = useLsiValues(Lsi)

        useEffect(() => {
            setInterval(() => {
                setDay(moment().locale(inputLsi.day).format('MMMM Do YYYY'))
            }, 1000);
        }, [])
        //@@viewOff:hooks

        //@@viewOn:render
        return (
            <div style={{/*border: "1px solid #866B6E", padding:"20px 20px 20px 20px", */display: "inline-block"/*, borderRadius: "15px",background:"rgba(228,223,220, 0.3)"*/ }}>
                <div className={Css.clock()}>
                    <span>{props.gatewayName}</span>
                    <FlipClock
                        type="clock"
                        units={[
                            {
                                sep: ' ',
                                type: 'hours',
                                title: 'hour',
                            },
                            {
                                sep: ':',
                                type: 'minutes',
                                title: 'minute',
                            }
                        ]}
                    />
                    <span>{day}</span>
                </div>
            </div>
        )

        //@@viewOff:render
    }
});

export default DateTime;

