import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

interface PageTitleProps {
	title: string;
}
const PageTitle: React.FunctionComponent<PageTitleProps> = (props) => {
	return (
		<Helmet>
			<title>{props.title} | Nomad-coffee</title>
		</Helmet>
	);
};

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageTitle;
