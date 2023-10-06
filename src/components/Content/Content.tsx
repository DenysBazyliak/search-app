import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { getArticle } from "../../store/articlesSlice.tsx";

import style from "./Content.module.css";

export const Content = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const article = useAppSelector((state) => state.articles.article);
  //TODO use useState instead
  useEffect(() => {
    if (id) {
      dispatch(getArticle(id));
    }
  }, [id]);
  console.log("article", article);

  if (!article) {
    return (
      <>
        <Typography variant={"h1"}> Pardon our server</Typography>
        <div className={style.linkWrapper}>
          <Link className={style.link} to={"/"}>
            ←Back to homepage
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className={style.wrapper}>
      <Box
        sx={{
          backgroundImage: `url(${article.img})`,
          height: "20%",
        }}
      />
      <Paper
        elevation={3}
        sx={{
          margin: "10px 30px 0px 30px",
          width: "85%",
          height: "fit-content",
          position: "relative",
          top: "-70px",
          left: "47px",
        }}
      >
        <Typography sx={{ padding: "20px", textAlign: "center" }}>
          {article.title}
        </Typography>
        <Typography sx={{ padding: "20px", textAlign: "start" }}>
          {article.text}
          <br />
          {article.text}
        </Typography>
      </Paper>
      <Link className={style.link} to={"/"}>
        ←Back to homepage
      </Link>
    </div>
  );
};
