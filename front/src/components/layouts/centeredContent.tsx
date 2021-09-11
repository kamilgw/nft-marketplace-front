import React from 'react';
// @ts-ignore
import styles from './centeredContent.module.scss';

export const CenteredContent: React.FC = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
