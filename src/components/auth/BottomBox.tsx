import { BaseBox } from "@/components/shared";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SBottomBox = styled(BaseBox)`
	padding: 20px 0px;
	text-align: center;
	a {
		font-weight: 600;
		margin-left: 5px;
		color: ${(props) => props.theme.accent};
	}
`;

interface BottomBoxProps {
	cta: string;
	link: string;
	linkText: string;
}
const BottomBox: React.FunctionComponent<BottomBoxProps> = (props) => {
	const { cta, link, linkText } = props;
	return (
		<SBottomBox>
			<span>{cta}</span>
			<Link to={link}>{linkText}</Link>
		</SBottomBox>
	);
};

BottomBox.propTypes = {
	cta: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
};

export default BottomBox;
