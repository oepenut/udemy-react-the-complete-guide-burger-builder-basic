import React, { ReactNode, Fragment } from 'react';
import Toolbar from 'components/Navigation/Toolbar';

type Props = {
  children: ReactNode;
};

const index = (props: Props) => {
  const { children } = props;

  return (
    <Fragment>
      <Toolbar />
      <div>{children}</div>
    </Fragment>
  );
};

export default index;
