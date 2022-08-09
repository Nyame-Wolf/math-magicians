/* eslint-disable react/prop-types */

const Input = (props) => {
  const { className, value, handleClick } = props;
  return (<input type="button" className={className} value={value} onClick={handleClick} />);
};

export default Input;
