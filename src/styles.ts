import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const darkTheme = {
	fontColor: "lightgray",
	bgColor: "#2c2c2c",
};

export const lightTheme = {
	fontColor: "#2c2c2c",
	bgColor: "lightgray",
};
export const GlobalStyle = createGlobalStyle`
    ${reset}
    transition: all 0.25s ease-in-out;
    body{
        background-color:${(props) => props.theme.bgColor};
    }
`;
