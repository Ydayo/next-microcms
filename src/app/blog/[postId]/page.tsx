import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../_libs/microcms";
import styles from "../../../styles/page.module.css";

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
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <div>{parse(post.content)}</div>
    </div>
  );
};

export default StaticDetailPage;
