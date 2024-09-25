import PropTypes from "prop-types";
import Header from "./Header";

const PageLayout = ({ userName, pageTitle, children }) => {
  return (
    <div>
      <Header userName={userName} pageTitle={pageTitle} />
      <div className="pt-16 p-6">{children}</div>
    </div>
  );
};

PageLayout.propTypes = {
  userName: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
