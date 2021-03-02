import React from 'react';
import Logo from 'components/UI/Logo';
import Navbar from '../Navbar';
import Styles from './toolbar.module.css';

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
  showSideDrawer: () => void;
};

const index = (props: Props) => {
  const { showSideDrawer } = props;

  return (
    <header className={Styles.Toolbar}>
      <div onClick={showSideDrawer}>Menu</div>
      <div className={Styles.Logo}>
        <Logo />
      </div>
      <nav className={Styles.DesktopOnly}>
        <Navbar navItems={navItems} />
      </nav>
    </header>
  );
};

export default index;
