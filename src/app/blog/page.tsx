import clsx from "clsx";
import Link from "next/link";
import { getList } from "../../libs/microcms";
import styles from "../../styles/page.module.css";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";
import PaginationControls from "@/components/ui/Pagination/Pagination";

// キャッシュを利用しない場合 0 を設定
// キャッシュを利用しない場合、常にレンダリングを行うSSRになる
// キャッシュを利用する場合、ISRになる
export const revalidate = 10;

export default async function BlogLists({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { contents } = await getList();
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "8";

  const start = (Number(page) - 1) * Number(per_page); // 0, 8, 16 ...
  const end = start + Number(per_page); // 8, 16, 24 ...
  const entries = contents.slice(start, end);

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <>
      <Header />
      <div className={clsx(styles.blog, styles.container)}>
        <div className={styles["blog-lists"]}>
          {entries.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              className={styles["blog-list"]}
              key={post.id}
            >
              {post.title.length > 15
                ? `${post.title.substring(0, 15)}...`
                : post.title}
              <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles["pagination-fixed"]}>
        <PaginationControls
          hasNextPage={end < contents.length}
          hasPrevPage={start > 0}
        />
      </div>
      <div className={styles.fixed}>
        <Footer />
      </div>
    </>
  );
}
