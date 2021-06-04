import Config from "./config/config";

const top = () => Config.Css.css`
 background: #887275;
 display:contents;
`; 

const menu = () => Config.Css.css`
display:contents;
font-size: 40px;
font-family: Brush Script MT;
`; 

const left = () => Config.Css.css`
.plusu-app-yp8714{
    background-image: linear-gradient(to top, #454754, #554f5d, #675865, #77616a, #866b6e);
}
`;

const page = () => Config.Css.css`
background: no-repeat url("assets/karpo.jpg");
background-size: 100% 100%;
.plus4u5-app-page-left-wrapper + button.color-schema-blue-rich {
    background-color: #866B6E !important;
}
`; 

export default {
    top,
    page, 
    menu,
    left
};
