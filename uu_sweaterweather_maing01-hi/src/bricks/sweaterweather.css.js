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
const library = () => Config.Css.css`
`; 

export default {
    switcher,
    header,
    iconSun,
    dateTime,
    library 
};
