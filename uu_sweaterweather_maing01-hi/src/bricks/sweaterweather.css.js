import Config from "./config/config";

const switcher = () => Config.Css.css`
display: flex;
justify-content: center;
`;

const header = () => Config.Css.css`
display: flex;
justify-content: center;
font-size: 30px;
`; 

const iconSun = () => Config.Css.css`
color: blue;
font-size: 35px;
`; 

const dateTime = () => Config.Css.css`
display-flex;
`; 

const tagSelect = () => Config.Css.css`
.uu5-forms-item-list {
    background-color: transparent;
    border: 2px solid grey;
},
.uu5-bricks-popover-body {
    background-color: transparent !important;
},
.uu5-forms-select-option {
background-color: rgba(228,223,220, 0.8);
}
`; 

const carousel = () => Config.Css.css`
.slider-container {
    width: 100%;
    height: 70%;
    position:fixed; /* add this code for position fixed */
    top:0px; /* set top and left 0 */
    left:0px;
}
button.rec-dot_active{
    background-color: rgba(70,64,64);
    box-shadow: 0 0 3px 3px rgba(134,107,110);
}
button.ehkxHv:enabled {
    background-color: rgba(228,223,220, 0.8);
}
.cGKbZh:hover:enabled, .cGKbZh:focus:enabled {
    background-color: rgba(103,58,183,0.1);
}
.rec.rec-arrow:hover, .rec.rec-arrow:focus {
    border-radius: 20%;
    background-color: rgba(134,107,110);
}
`; 

export default {
    switcher,
    header,
    iconSun,
    dateTime,
    tagSelect ,
    carousel
};
