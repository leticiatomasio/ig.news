import { GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

type Post = {
  slug: string;
  title: string;
  preview: string;
  updatedAt: string;
};

type PostsProps = {
  posts: Post[];
};

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.mainContent}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <a key={post.slug} href="#">
              <time>{post.updatedAt}</time>
              <p>{post.title}</p>
              <p>{post.preview}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType("post");

  const posts = response.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      preview:
        (post.data.content as Array<{ type: string; text: string }>).find(
          (content) => content.type === "paragraph"
        ).text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "en-US",
        { day: "2-digit", month: "long", year: "numeric" }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
