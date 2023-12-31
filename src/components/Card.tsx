import React from "react";
import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type CardProps = {
  image: string;
  width?: string;
  height?: string;
  title: string;
  description: string;
  color: string;
  bg: string;
};

const Card: React.FC<CardProps> = ({
  image,
  width = "100%",
  height = "200px",
  title,
  description,
  color,
  bg,
}) => {
  return (
    <MuiCard
      sx={{
        width: "100%",
        backgroundColor: bg,
        position: "relative",
        "&:hover": {
          top: "-5px",
        },
        "& .MuiCardContent-root": {
          borderBottom: `2px solid ${color}`,
        },
        "& .MuiTypography-root": {
          textDecoration: "none",
        },
      }}
    >
      <CardMedia>
        <img
          src={image}
          alt={title}
          style={{
            width: width,
            height: height,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </CardMedia>
      <CardContent style={{ backgroundColor: "white" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: color }}
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
