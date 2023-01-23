import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Jesse's News Fetcher",
  keywords: "news, web, new, fun, cool, interesting, great, guy",
  description:
    "Jesse's News Fetcher is a totally operational news fetcher, I'm telling you. It's totally operational.",
};

export default Meta;
