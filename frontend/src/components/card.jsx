import PropTypes from 'prop-types';

export const Card = ({ children }) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm place-content-start ">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
