import React from "react";
import { Button as MuiButton } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

type ButtonProps = {
  icon?: React.ReactNode;
  text?: string;
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
  const cache = createCache({
    key: "css",
    prepend: true,
  });

  return (
    <CacheProvider value={cache}>
      <MuiButton
        variant="contained"
        color={color}
        className={className}
        startIcon={icon}
        style={style}
        onClick={onClick}
      >
        {text}
      </MuiButton>
    </CacheProvider>
  );
};

export default Button;
