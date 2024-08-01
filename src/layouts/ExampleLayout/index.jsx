import PropTypes from 'prop-types';

const ExampleLayout = ({ children }) => {
  return <div>{children}</div>;
};

ExampleLayout.propTypes = {
  children: PropTypes.node,
};

export default ExampleLayout;
