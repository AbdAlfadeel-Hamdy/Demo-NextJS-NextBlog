import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
}

export function getStaticPaths() {
  const postsFiles = getPostsFiles();
  const slugs = postsFiles.map((postFile) => postFile.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),

    fallback: false,
  };
}

export default PostDetailPage;
