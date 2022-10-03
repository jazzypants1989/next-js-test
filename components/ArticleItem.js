import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ post }) => {
  return (
    <Link href="/article/[id]" as={`/article/${post.id}`}>
      <a className={articleStyles.card}>
        <h3>{post.title} &rarr;</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  );
};
export default ArticleItem;
