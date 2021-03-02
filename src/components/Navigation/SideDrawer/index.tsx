import React, { Fragment } from 'react';
import Logo from 'components/UI/Logo';
import Navbar from 'components/Navigation/Navbar';
import Backdrop from 'components/UI/Backdrop';
import Styles from './sidedrawer.module.css';

const navItems = {
  items: [
    {
      src: '/',
      label: 'Home',
    },
    {
      src: '/payment',
      label: 'Payment',
    },
  ],
  activeUrl: '/',
};

type Props = {
  showSideDrawer: boolean;
  hideSideDrawer: () => void;
};

const index = (props: Props) => {
  const { showSideDrawer, hideSideDrawer } = props;

  const classes = [Styles.SideDrawer];

  showSideDrawer ? classes.push(Styles.Open) : classes.push(Styles.Close);

  return (
    <Fragment>
      <Backdrop show={showSideDrawer} hideModal={hideSideDrawer} />
      <div className={classes.join(' ')}>
        <div className={Styles.Logo}>
          <Logo />
        </div>
        <nav>
          <Navbar navItems={navItems} />
        </nav>
      </div>
    </Fragment>
  );
};

export default index;
