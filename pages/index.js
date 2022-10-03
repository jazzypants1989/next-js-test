import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesse&apos;s News Fetcher</title>
        <meta
          name="news web new fun cool interesting great guy"
          content="Jesse's News Fetcher"
        />
      </Head>
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
