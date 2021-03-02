import React from 'react';
import Styles from './navitem.module.css';

type Props = {
  src: string;
  label: string;
  active: boolean;
};

const index = (props: Props) => {
  const { src, label, active } = props;
  return (
    <li className={Styles.NavigationItem}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className={active ? Styles.active : ''}>
        {label}
      </a>
    </li>
  );
};

export default index;
