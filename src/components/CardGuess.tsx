import React, { useEffect } from "react";

type CardProps = {
  className?: string;
  number?: number;
  style?: any;
  width: number;
  height: number;
  color: string;
  hoverColor: string;
  activeColor: string;
  cardImage?: string;
  isActive: boolean;
  onClick: () => void;
};

const CardGuess: React.FC<CardProps> = ({
  className,
  number,
  style,
  width,
  height,
  color,
  hoverColor,
  activeColor,
  cardImage,
  isActive,
  onClick,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const tmpStyle = {
    position: "relative",
    width: width,
    height: height,
    backgroundColor: isActive ? activeColor : isHovered ? hoverColor : color,
    borderRadius: 10,
    border: !cardImage ? "1px solid black" : "none",
    marginTop: "12px",
  };

  const cardStyle = { ...style, ...tmpStyle };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    onClick();
  };

  useEffect(() => {
    tmpStyle.backgroundColor = isActive
      ? activeColor
      : isHovered
      ? hoverColor
      : color;
  }, [isActive, isHovered, color, hoverColor, activeColor]);

  return (
    <div
      style={cardStyle}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: number && number < 10 ? "15px" : "10px",
        }}
      >
        {number}
      </div>
      <div className="card-image">
        {cardImage && (
          <img
            className="card-image"
            src={cardImage}
            style={{
              width: width,
              height: height,
              borderRadius: 10,
            }}
            width={width}
            height={height}
          />
        )}
      </div>
    </div>
  );
};

export default CardGuess;
