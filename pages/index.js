import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <ArticleList posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
