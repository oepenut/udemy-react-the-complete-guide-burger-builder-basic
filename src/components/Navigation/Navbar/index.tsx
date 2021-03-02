import React from 'react';
import NavItem from './NavItem';
import Styles from './navbar.module.css';

type Props = {
  navItems: {
    items: {
      src: string;
      label: string;
    }[];
    activeUrl: string;
  };
};

const index = (props: Props) => {
  const { items, activeUrl } = props.navItems;
  return (
    <ul className={Styles.NavigationItems}>
      {items.map((item, index) => {
        const { src, label } = item;
        return (
          <NavItem
            key={index}
            src={src}
            label={label}
            active={src === activeUrl}
          />
        );
      })}
    </ul>
  );
};

export default index;
