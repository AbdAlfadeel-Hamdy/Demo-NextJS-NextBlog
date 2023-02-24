import PostsGrid from "./posts-grid";
import styles from "./all-posts.module.css";

const AllPosts = (props) => {
  const { posts } = props;
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
