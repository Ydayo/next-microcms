import clsx from "clsx";
import Link from "next/link";
import { getList } from "../_libs/microcms";
import styles from "../../styles/page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// キャッシュを利用しない
// キャッシュを利用しない場合、常にレンダリングを行うSSRになる
// キャッシュを利用する場合、ISRになる
export const revalidate = 10;

export default async function StaticPageBlog() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <>
      <Header />
      <div className={clsx(styles.blog, styles.container)}>
        <Link href={"/"} className={styles["back-home"]}>
          戻る
        </Link>
        <div className={styles["blog-lists"]}>
          {contents.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              className={styles["blog-list"]}
              key={post.id}
            >
              {post.title}
              <p>{post.createdAt}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.fixed}>
        <Footer />
      </div>
    </>
  );
}
