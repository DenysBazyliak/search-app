import { useEffect } from "react";

import { getArticles } from "../../store/articlesSlice.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";

import { Box } from "@mui/material";
import { Article } from "./Article/Article.tsx";

import style from "./Articles.module.css";

export const Articles = () => {
  const dispatch = useAppDispatch();

  const articlesData = useAppSelector((state) => state.articles.articles);
  const keywords = useAppSelector((state) => state.articles.keywords);

  const articles = articlesData.map((article) => (
    <Article key={article.id} keywords={keywords} {...article} />
  ));

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <Box className={style.content}>
      <div className={style.wrapper}>{articles}</div>
    </Box>
  );
};
