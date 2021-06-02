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
`;

export default {
    day,
    menu,
    clock,
    selector
};
