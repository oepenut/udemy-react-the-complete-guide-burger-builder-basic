import React, { ReactNode } from 'react';
import Styles from './modal.module.css';

type Props = {
  children?: ReactNode;
};

const index = (props: Props) => {
  const { children } = props;
  return <div className={Styles.Modal}>{children}</div>;
};

export default index;
