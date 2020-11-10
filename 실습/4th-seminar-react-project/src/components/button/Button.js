import './Button.scss';

function Button({ text, textColor = '#444', onClickFunc, leftIcon }) {
  console.log(leftIcon);
  return (
    <span className="button" style={{ color: textColor }} onClick={onClickFunc}>
      {leftIcon && leftIcon.render()}
      &nbsp;
      {text}
    </span>
  );
}

export default Button;
