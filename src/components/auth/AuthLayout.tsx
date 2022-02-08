import { disableDarkMode, enableDarkMode, isDarkModeVar } from "@/apollo";
import { useReactiveVar } from "@apollo/client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div`
	max-width: 350px;
	width: 100%;
`;

const Footer = styled.footer`
	margin-top: 20px;
`;

const DarkModeBtn = styled.span`
	cursor: pointer;
`;
interface AuthLayoutProps {
	children: JSX.Element[];
}
const AuthLayout: React.FunctionComponent<AuthLayoutProps> = (props) => {
	const darkMode = useReactiveVar(isDarkModeVar);
	return (
		<Container>
			<Wrapper>{props.children}</Wrapper>
			<Footer>
				<DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode}>
					<FontAwesomeIcon
						icon={darkMode ? (faSun as IconProp) : (faMoon as IconProp)}
					/>
				</DarkModeBtn>
			</Footer>
		</Container>
	);
};

export default AuthLayout;
