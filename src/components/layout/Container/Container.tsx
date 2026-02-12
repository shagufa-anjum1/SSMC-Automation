import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'default' | 'narrow' | 'wide' | 'full';
  className?: string;
  style?: React.CSSProperties; // ✅ Add style prop
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'default',
  className = '',
  style, // ✅ Receive style prop
}) => {
  return (
    <div
      className={`${styles.container} ${styles[maxWidth]} ${className}`}
      style={style} // ✅ Apply style
    >
      {children}
    </div>
  );
};
