import { isDarkModeVar, isLoggedInVar } from "@/apollo";
import styled from "styled-components";

const Title = styled.h1`
	color: ${(props) => props.theme.fontColor};
`;
function Users() {
	const isDarkMode = isDarkModeVar();
	return (
		<div>
			<Title>Home</Title>
			<button onClick={() => isLoggedInVar(false)}>Log out now!</button>
			<button onClick={() => isDarkModeVar(!isDarkMode)}>
				Toggle Dark Mode
			</button>
		</div>
	);
}
export default Users;
