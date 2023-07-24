import React from 'react';
import { Button as MuiButton } from '@mui/material';

type ButtonProps = {
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  variation?: string;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  onClick,
  style,
  className,
  color,
}) => {
  return (
    <MuiButton
      variant='contained'
      color={color}
      className={className}
      startIcon={icon}
      style={style}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
