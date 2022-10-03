import articleStyles from "../styles/Article.module.css";
import Link from "next/link";
import ArticleItem from "./ArticleItem";

const articleList = ({ posts }) => {
  return (
    <div className={articleStyles.grid}>
      {posts.map((post) => (
        <ArticleItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default articleList;
