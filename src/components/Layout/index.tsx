import React, { ReactNode, Fragment, useState } from 'react';
import SideDrawer from 'components/Navigation/SideDrawer';
import Toolbar from 'components/Navigation/Toolbar';

type Props = {
  children: ReactNode;
};

const Index = (props: Props) => {
  const { children } = props;
  const [sideDrawerShow, setSideDrawerShow] = useState(true);

  const hideSideDrawer = () => setSideDrawerShow(false);
  const showSideDrawer = () => setSideDrawerShow(true);

  return (
    <Fragment>
      <SideDrawer
        showSideDrawer={sideDrawerShow}
        hideSideDrawer={hideSideDrawer}
      />
      <Toolbar showSideDrawer={showSideDrawer} />
      <div>{children}</div>
    </Fragment>
  );
};

export default Index;
