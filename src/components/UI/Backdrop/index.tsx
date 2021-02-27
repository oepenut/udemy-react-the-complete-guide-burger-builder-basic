import React from 'react';
import Styles from './backdrop.module.css';

type Props = {
  show: boolean;
  hideModal: () => void;
};

const index = (props: Props) =>
  props.show ? (
    <div className={Styles.Backdrop} onClick={props.hideModal}></div>
  ) : null;

export default index;
