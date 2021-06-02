import Config from "./config/config";
const day = () => Config.Css.css`
text-align: center;
clear: both;
margin-right: 15px;
font-family: Brush Script MT;
font-size: 25px;
color: #454754; 
`;

const menu = () => Config.Css.css`
border-radius: 8px;
`;

const clock = () => Config.Css.css`
display: inline-block;
.FlipClock {
    width: fit-content;
    display: flex;
}
.FlipClock .flipUnitContainer .ContainerTitle {
    display: none;
}
.FlipClock .flipUnitContainer {
background-color: #866B6E;
}
`;

const selector = () => Config.Css.css`
.uu-1088yji {
background-color: rgb(134, 107, 110);
}
button.uu-13cszwg.uu-tyii52{
    color: #454754;
}
.uu-1088yji {
color: white !important;   
}
.uu-1whczb8:active {
    background-color: rgb(134, 107, 110);
}
.uu-15z2z1m:focus, .uu-15z2z1m:active {
    padding: 2px;
    border-width: 1px;
    border-color: rgb(121 85 72 / 1%);
}
.uu-15z2z1m {
    padding: 3px;
    border-width: 1px;
    border-color: rgb(189 189 189 / 0%);
    border-radius: 2px;
}
.uu-1088yji {
    border-radius: 5px;
    background-color: rgb(134, 107, 110);
}
.uu-1whczb8:active {
    background-color: rgb(134, 107, 110);
    border-radius: 5px;
}
`;

export default {
    day,
    menu,
    clock,
    selector
};
