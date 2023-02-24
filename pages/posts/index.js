import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "getting-started-nextjs",
    slug: "getting-started-nextjs",
    excerpt: "A react Framework",
    image: "getting-started-nextjs.png",
    date: "2022-10-1",
  },
  {
    title: "getting-started-nextjs",
    slug: "getting-started-nextjs2",
    excerpt: "A react Framework",
    image: "getting-started-nextjs.png",
    date: "2022-10-1",
  },
  {
    title: "getting-started-nextjs",
    slug: "getting-started-nextjs3",
    excerpt: "A react Framework",
    image: "getting-started-nextjs.png",
    date: "2022-10-1",
  },
  {
    title: "getting-started-nextjs",
    slug: "getting-started-nextjs4",
    excerpt: "A react Framework",
    image: "getting-started-nextjs.png",
    date: "2022-10-1",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};
export default AllPostsPage;
