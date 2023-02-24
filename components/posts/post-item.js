import Image from "next/image";
import Link from "next/link";
import styles from "./post-item.module.css";

const PostItem = (props) => {
  const { title, date, excerpt, image, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={styles.post}>
      <Link>
        <div className={styles.image}>
          <Image src={imagePath} alt={title} width={300} height={250} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
