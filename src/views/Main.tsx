import { isDarkModeVar, isLoggedInVar } from "@/apollo";
import styled from "styled-components";

const Title = styled.h1`
	color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div``;

function Main() {
	const isDarkMode = isDarkModeVar();
	return (
		<Container>
			<Title>Login</Title>
			<button onClick={() => isLoggedInVar(true)}>Log out now!</button>
			<button onClick={() => isDarkModeVar(!isDarkMode)}>
				Toggle Dark Mode
			</button>
		</Container>
	);
}
export default Main;
