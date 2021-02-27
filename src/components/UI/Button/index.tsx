import React from 'react';
import Style from './button.module.css';

type Props = {
  label: string;
  onClickButton: () => void;
  buttonStyle: 'Success' | 'Danger';
};

const index = (props: Props) => {
  const { label, onClickButton, buttonStyle } = props;

  let buttonClass = '';
  switch (buttonStyle) {
    case 'Success':
      buttonClass = Style.Success;
      break;
    case 'Danger':
      buttonClass = Style.Danger;
      break;
    default:
      break;
  }
  return (
    <button
      className={[Style.Button, buttonClass].join(' ')}
      onClick={onClickButton}>
      {label}
    </button>
  );
};

export default index;
