import React from 'react';
import { Button as MuiButton } from '@mui/material';

type ButtonProps = {
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  onClick,
  style,
  className,
}) => {
  return (
    <MuiButton
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
