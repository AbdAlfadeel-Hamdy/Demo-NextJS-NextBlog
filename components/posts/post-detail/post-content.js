import PostHeader from "./post-header";
import styles from "./post-content.module.css";

const DUMMY_POST = {
  title: "getting-started-nextjs",
  slug: "getting-started-nextjs",
  image: "getting-started-nextjs.png",
  date: "2022-10-1",
  content: "# This is a blog!",
};

const PostContent = (props) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
