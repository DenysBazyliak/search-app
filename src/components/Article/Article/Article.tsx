import React from "react";

import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import HighlightedText from "../../../utilities/HighLightedText.tsx";

import style from "./Article.module.css";

type ArticleProps = {
  id: string;
  img: string;
  title: string;
  text: string;
  keywords: string;
};

export const Article: React.FC<ArticleProps> = (article) => {
  return (
    <Card
      sx={{ maxWidth: 330, margin: "20px 30px 20px 50px" }}
      className={style.card}
    >
      <CardMedia
        sx={{ width: "100% ", height: "180px" }}
        image={article.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <HighlightedText
            text={article.title}
            keywords={article.keywords}
          ></HighlightedText>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            maxWidth: "300px",
            overflow: "hidden",
            lineHeight: "1rem",
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            textOverflow: "ellipsis",
            WebkitLineClamp: 3,
          }}
        >
          <HighlightedText
            text={article.text}
            keywords={article.keywords}
          ></HighlightedText>
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={style.link} to={`/content/${article.id}`}>
          Read more→
        </Link>
      </CardActions>
    </Card>
  );
};
