import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import React, { FC } from "react";
import "./CardItem.css";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

interface CardItemTypes {
  description: string;
  imgSrc: string;
  title: string;
  gitHref?: string;
}

export const CardItem: FC<CardItemTypes> = ({
  description,
  title,
  imgSrc,
  gitHref,
}) => {
  return (
    <Card sx={{ maxWidth: "95%" }} className="Card">
      <Box>
        <CardContent>
          <Typography variant="body1" color="secondary">
            {title}
          </Typography>
          <Typography variant="body2" color="secondary">
            {description}
          </Typography>
        </CardContent>
        <Box>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Link href={gitHref} underline="none">
                <GitHubIcon color="secondary" />
              </Link>
            </IconButton>
          </CardActions>
        </Box>
      </Box>

      <CardMedia
        component="img"
        height="194"
        image={imgSrc}
        className="CardMedia"
        alt="Paella dish"
      />
    </Card>
  );
};
