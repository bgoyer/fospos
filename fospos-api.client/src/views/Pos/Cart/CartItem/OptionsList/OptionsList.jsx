import PropTypes from "prop-types";

const OptionsList = ({ optionList }) => {
  if (!optionList || optionList.length === 0) {
    return <div>No options available.</div>;
  }

  return (
    <>
      {optionList.map((option, index) => (
        <div key={option.id || index} className="itemOptionList">
          <div className="itemOption">
            <p>{option.Name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

OptionsList.propTypes = {
  optionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      Name: PropTypes.string.isRequired,
    })
  ),
};

OptionsList.defaultProps = {
  optionList: [],
};

export default OptionsList;
