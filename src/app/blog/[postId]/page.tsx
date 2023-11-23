import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../_libs/microcms";
import styles from "../../../styles/page.module.css";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";
import Link from "next/link";
import clsx from "clsx";

// キャッシュを利用しない
// キャッシュを利用しない場合、常にレンダリングを行うSSRになる
// キャッシュを利用する場合、ISRになる
export const revalidate = 10;

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

const StaticDetailPage = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Link href={"/blog"} className={styles["back-home"]}>
          戻る
        </Link>
        <h1 className={styles["blog-title"]}>{post.title}</h1>
        <div className={styles["blog-contents"]}>{parse(post.content)}</div>
      </div>
      <Footer />
    </>
  );
};

export default StaticDetailPage;
