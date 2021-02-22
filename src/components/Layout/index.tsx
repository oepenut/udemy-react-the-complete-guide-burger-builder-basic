import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const index = (props: Props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default index;
