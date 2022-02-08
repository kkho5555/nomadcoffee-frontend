import styled from "styled-components";

const SFormError = styled.span`
	color: tomato;
	font-weight: 600;
	font-size: 12px;
	margin: 5px 0px 10px 0px;
`;

interface FormErrorProps {
	message: string | undefined;
}
const FormError: React.FunctionComponent<FormErrorProps> = (props) => {
	return props.message === "" || !props.message ? null : (
		<SFormError>{props.message}</SFormError>
	);
};

export default FormError;
