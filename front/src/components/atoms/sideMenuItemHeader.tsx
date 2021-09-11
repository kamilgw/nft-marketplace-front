// @ts-ignore
import styles from './sideMenuItemHeader.module.scss';
import React from 'react';
import { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon';

interface SideMenuItemHeaderProps {
  icon: AntdIconProps;
  text: string;
}

export const SideMenuItemHeader: React.FC<SideMenuItemHeaderProps> = props => {
  return (
    <div className={styles.itemHeader}>
      {props.icon} {props.text}
    </div>
  );
};
