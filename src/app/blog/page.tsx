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
      <div className={styles.container}>
        <Link href={"/"} style={{ color: "white", padding: 10 }}>
          戻る
        </Link>
        <ul style={{ margin: 0, padding: 0 }}>
          {contents.map((post) => {
            return (
              <li
                key={post.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  listStyle: "none",
                }}
              >
                <Link href={`/blog/${post.id}`} style={{ color: "white" }}>
                  {post.title}
                </Link>
                <p>{post.createdAt}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.fixed}>
        <Footer />
      </div>
    </>
  );
}
