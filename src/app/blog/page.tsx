import Link from "next/link";
import { getList } from "../_libs/microcms";
import styles from "../../styles/page.module.css";

// キャッシュを利用しない
// キャッシュを利用しない場合、常にレンダリングを行うSSRになる
// キャッシュを利用する場合、ISRになる
export const revalidate = 0;

export default async function StaticPageBlog() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className={styles.container} style={{ padding: 10 }}>
      <Link href={"/"} style={{ color: "white" }}>
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
  );
}
