import React, { ReactNode, Fragment } from 'react';
import Backdrop from 'components/UI/Backdrop';
import Styles from './modal.module.css';

type Props = {
  children?: ReactNode;
  show: boolean;
  hideModal: () => void;
};

const index = (props: Props) =>
  props.show ? (
    <Fragment>
      <Backdrop show={props.show} hideModal={props.hideModal} />
      <div className={Styles.Modal}>{props.children}</div>
    </Fragment>
  ) : null;

export default index;
