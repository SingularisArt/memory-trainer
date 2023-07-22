import React from 'react';
import { Button as MuiButton } from '@mui/material';

type ButtonProps = {
  icon?: React.ReactNode;
  variation?: 'primary' | 'secondary' | 'outlined';
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ icon, variation = 'primary', text, onClick, style }) => {
  return (
    <MuiButton
      variant={variation}
      startIcon={icon}
      style={style}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
