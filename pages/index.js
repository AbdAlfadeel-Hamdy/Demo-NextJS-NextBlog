import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment } from "react";

const HomePage = () => {
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
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};
export default HomePage;
