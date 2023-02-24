import styles from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

const FeaturedPosts = (props) => {
  const { posts } = props;
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
